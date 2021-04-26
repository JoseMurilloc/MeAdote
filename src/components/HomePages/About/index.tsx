import { BsFillHeartFill } from 'react-icons/bs';
import {SiDatadog} from 'react-icons/si';
import {GiCat, GiDogBowl} from 'react-icons/gi';
import { Container } from './styles';

export function About() {
  return (
    <Container>
     <aside>
       <div className="green">
         <SiDatadog size={20} color="#FFF" />
       </div>
       <div className="yellow">
         <GiCat size={20} color="#FFF" />
       </div>
       <div>
         <BsFillHeartFill size={20} color="#FFF" />
       </div>
       <div className="purple">
         <GiDogBowl size={20} color="#FFF" />
       </div>
     </aside>
     <main>
       <section className="content">
          <h1>Me adota!</h1>
          <p>Somos um abrigo bem popular em petrolina por suas ações desde 2015, realizamos busca de animais abandonados pela cidade e cuidamos com muito amor, castrando, realizando os exames necessários para o bem estar do animalzinho e colocando para a adoção em perfeito estado.Conseguindo até hoje realizar todo esse progresso com a ajuda de todos!</p>
       </section>
       <section className="team">
         <img src="/images/team.png" alt=""/>
       </section>
     </main>
    </Container>
  );
};

