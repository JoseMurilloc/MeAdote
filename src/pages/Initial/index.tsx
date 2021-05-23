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
              onClick={() => setActive((state) => !state)}
            >
              Cachorro
            </span>
            <span
              className={!active ? "active" : ""} 
              onClick={() => setActive((state) => !state)}
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
           <select id="cars">
            <option value="" disabled selected>
             Sexo
            </option>
             <option value="volvo">Masculino</option>
             <option value="saab">Feminino</option>
           </select>
 
           <select id="cars">
            <option value="" disabled selected>
             Porte
            </option>
             <option value="volvo">Pequeno</option>
             <option value="saab">Medio</option>
             <option value="opel">Grande</option>
           </select>
 
           <select id="cars">
              <option value="" disabled selected>
                Idade
              </option>
             <option value="volvo">1</option>
             <option value="saab">2</option>
             <option value="opel">3</option>
             <option value="audi">4+</option>
           </select>
 
           <select id="cars">
              <option value="" disabled selected>
                Necessidades especiais
              </option>
             <option value="volvo">Sim</option>
             <option value="saab">Não</option>
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
