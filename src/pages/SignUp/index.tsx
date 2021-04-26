import Input from '../../components/GlobalPages/Input';
import { Container, Header } from './styles';
import Link from 'next/link';

import { GoMail } from 'react-icons/go';
import { BsLock } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';

const SignUp: React.FC = () => {

  return (
    <Container>
      <img 
        src="/images/dogRegister.png" 
        alt="Dog city"
      />

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
              icon={BiUserCircle}
              name="name" 
              placeholderLabel="name" 
              spellCheck={false}
            />

            <Input 
              icon={GoMail}
              name="email" 
              placeholderLabel="E-mail" 
              spellCheck={false}
            />

            <Input
              icon={BsLock}
              name="password"
              placeholderLabel="Senha"
              type="password" 
            />

            <Input
              icon={BsLock}
              name="password_confirmation"
              placeholderLabel="Confirmar Senha"
              type="password" 
            />

            <Input
              icon={FiPhoneCall}
              name="phone"
              placeholderLabel="Telefone"
              type="phone" 
            />

            <button>Cadastrar</button>
          </form>
        </div>
      </div>  
    </Container>
  );
};

export default SignUp;
