import Card from "../../components/Card";
import { BsFilter } from "react-icons/bs";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import React, { useCallback, useEffect, useState } from "react";
import { 
  Container, 
  ListFriends,
  ContainerSearchAnimal
} from "./styles";

interface Animal {
  id: number;
  name: string;
  age: number;
  photo: string;
  gender: "f" | "m";
  images: Array<{
    id: number;
    url: string
  }>
}
const Initial: React.FC = () => {
  const [active, setActive] = useState(true);
  const [filter, setFilter] = useState(false);

  const [dogs, setDogs] = useState<Animal[]>();
  const [cats, setCats] = useState<Animal[]>();

  useEffect(() => {
    api
      .get("/animals")
      .then((response) => {
        const dogsResponse = response.data.filter(animal => animal.type === 'dog')
        const catsResponse = response.data.filter(animal => animal.type === 'cat')
        setDogs(dogsResponse)
        setCats(catsResponse)
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChangeFilter = useCallback(() => {
    setFilter(state => !state)
  }, [])

  async function handleGenderAnimal(gender: string) {
    try {
      const response = await api.get('/animals', {
        params: {
          gender,
          type: active ? 'dog' : 'cat'
        }
      })

      if (active) {
        setDogs(response.data)
      } else {
        setCats(response.data)
      }
    } catch(err) {
      console.error(err)
    }
  }

  function handleChangeGender() {
    setActive((state) => !state)
  }

  return (
    <>
      <Container>
        <div className="header">
          <h1>Amores para adoção</h1>
          <p>
            Escolha aqui seu melhor amigo, temos uma listagem de vários
            cachorrinhos e gatinhos para adoção, se pensa em algum tipo
            específico vá em filtro que irá aparecer de acordo com suas
            escolhas.
          </p>
        </div>

        <div className="containerFilter">
          <div>
            <span
              className={active ? "active" : ""}
              onClick={handleChangeGender}
            >
              Cachorro
            </span>
            <span
              className={!active ? "active" : ""} 
              onClick={handleChangeGender}
            >
              Gato
            </span>
          </div>
          <button onClick={handleChangeFilter}>
            <BsFilter size={20} color="#252223" />
            <span>Filtrar</span>
          </button>
        </div>
        { filter && (
          <ContainerSearchAnimal>
            <select 
              id="sexy"
              onChange={e => handleGenderAnimal(e.target.value)}
            >
              <option value="" disabled selected>
                Sexo
              </option>
              <option value="m">Masculino</option>
              <option value="f">Feminino</option>
            </select>
 
            <select id="port">
              <option value="" disabled selected>
                Porte
              </option>
              <option value="small">Pequeno</option>
              <option value="medium">Medio</option>
              <option value="large">Grande</option>
            </select>
 
           <select id="age">
              <option value="" disabled selected>
                Idade
              </option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4+">4+</option>
           </select>
 
           <select id="need-specials">
              <option value="" disabled selected>
                Necessidades especiais
              </option>
             <option value="Sim">Sim</option>
             <option value="Não">Não</option>
           </select>
         </ContainerSearchAnimal>
        )}

        <ListFriends>
          {active ? (
            dogs?.map(
              (animal) => (
                <Card
                  photo={animal.photo}
                  key={animal.id}
                  name={animal.name} 
                  age={animal.age}
                  gender={animal.gender}
                  animal={animal}
                />
              )
            )
          ) : (
            cats?.map(
              (animal) => (
                <Card
                  photo={animal.photo}
                  key={animal.id}
                  name={animal.name} 
                  age={animal.age}
                  gender={animal.gender}
                  animal={animal}
                />
              )
            )
          )}
        </ListFriends>
      </Container>
      <Footer />
    </>
  );
};

export default Initial;
