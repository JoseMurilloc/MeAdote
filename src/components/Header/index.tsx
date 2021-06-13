import { useRouter } from 'next/router';
import { Container } from './styles';

export function Header() {
  const router = useRouter()

  return (
    <Container>
      <div className="content">
        <img 
          src="/images/MeAdotaLogo.svg" 
          alt="Logo page"
          className="MeAdotaLogo"
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
          <button 
            id="openButton" 
            onClick={() => router.push('/Authentication/SignIn')}
          >
            Entrar
          </button> 
          <button 
            id="registerButton"
            onClick={() => router.push('/Authentication/SignUp')}
          >
            Cadastrar
          </button>
        </aside>
      </div>    
    </Container>
  );
};
