import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div className="content">
        <img 
          src="/images/MeAdotaLogo.svg" 
          alt="Logo page"
        />

        <nav>
          <ul>
            <li key={Math.random()} className={'activeSection'}>
              Inicial
            </li>
            <li key={Math.random()}>
              Quem somos?
            </li>
            <li key={Math.random()}>
              Ajude
            </li>
            <li key={Math.random()}>
              Adotar
            </li>
          </ul>
        </nav>

        <aside>
          <button id="openButton">
            Entrar
          </button> 
          <button id="registerButton">
            Cadastrar
          </button>
        </aside>
      </div>    
    </Container>
  );
};
