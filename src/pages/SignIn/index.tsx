import Input from '../../components/GlobalPages/Input';
import { Container, Header } from './styles';

import Link from 'next/link';

import { FaFacebookF } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {GoMail} from 'react-icons/go'
import { BsLock } from 'react-icons/bs';

const SignIn: React.FC = () => {

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

            <Input
              icon={BsLock}
              name="password"
              placeholderLabel="Senha"
              type="password" 
            />

            <Link href="/ForgotPassword">
              <div id="forgot_password">
                <span>Esqueci minha senha</span>
              </div>
            </Link>

            <button>Entrar</button>

            <div className="socialContainer">
              <div>
                <FaFacebookF color="#000" size={20} />
              </div>
              
              <div>
                <MdEmail color="#000" size={20} />
              </div>

              <div>
                <FaTwitter color="#000" size={20}/>
              </div>
            </div>
          </form>
        </div>
      </div>  
    </Container>
  );
};

export default SignIn;
