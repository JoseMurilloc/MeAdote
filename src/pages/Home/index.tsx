import Image from 'next/image';
import { BsFilter } from 'react-icons/bs';
import Card from '../../components/Card';
import { Container, ListFriends } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <h1>Amores para adoção</h1>
        <p>
          Escolha aqui seu melhor amigo, temos uma listagem de vários cachorrinhos e gatinhos para adoção, se pensa em algum tipo específico vá em filtro que irá aparecer de acordo com suas escolhas.
        </p>
      </div>

      <div className="containerFilter">
        <div>
          <span className="active">Cachorro</span>
          <span>Gato</span>
        </div>
        <button>
          <BsFilter size={20} color="#252223" />
          <span>Filtrar</span>
        </button>
      </div>

      <ListFriends>
        {[0,1,2,3,4,5,6,7,8,9,10,11,11,7,8,9,10,11].map(i => (
          <Card 
            name="Luna" 
            gender="f" 
            photo="https://www.petlove.com.br/images/breeds/193068/profile/original/australian_cattle-p.jpg?1532538171" 
            age={20}  
          />
        ))}
      </ListFriends>


    </Container>
  )
}

export default Home;