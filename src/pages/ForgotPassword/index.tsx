
import Link from 'next/link';

import Input from '../../components/GlobalPages/Input';
import { Container, Header } from './styles';
import {GoMail} from 'react-icons/go'

const ForgotPassword: React.FC = () => {

  return (
    <Container>
      <img src="/images/dogCity.png" alt="Dog city"/>

      <div style={{width: '100%'}}>
        <Header>

          <aside>
          <Link href="/SignIn">
              <button id="openButton">
                Entrar
              </button>
            </Link>
            <Link href="/SignUp">
              <button id="registerButton">
                Cadastrar
              </button>
            </Link>
          </aside>
        </Header>

        <div className="content">
          <form>
            <legend>Bem vindo</legend>
            <h1>Adote por amor</h1>
            <p>
              Aqui você encontra seu melhor amigo, que irá trazer um colorido diferente para sua vida.
            </p>

            <Input 
              icon={GoMail}
              name="email" 
              placeholderLabel="E-mail"
              spellCheck={false} 
            />

          
            <button>Entrar</button>
         </form>
        </div>
      </div>  
    </Container>
  );
};

export default ForgotPassword;
