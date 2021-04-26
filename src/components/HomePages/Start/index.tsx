import { Container } from './styles';

import {BsFillHeartFill} from 'react-icons/bs';

export function Start() {
  return (
    <Container>
      <aside>
        <h1>Me Adote</h1>
        <p>Adote seu novo melhor amigo aqui e tenha uma vida repleta de amor todos os dias, amor e carinho todos os dias.</p>
        <button>
          Adote
          <BsFillHeartFill color="#FFF" />
        </button>
      </aside>
      <aside>
        <img src="/images/dog.png" alt="dog"/>
      </aside>
    </Container>
  );
};
