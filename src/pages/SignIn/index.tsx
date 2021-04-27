import { 
  Formik,
  Form,
} from 'formik'

import Link from 'next/link';
import Input from '../../components/GlobalPages/Input';

import { Container, Header } from './styles';
import { IconSigIn } from '../../utils/icons'
import { FormValues, SignInSchema } from './types';

const SignIn: React.FC = () => {
  const initialValues: FormValues = { 
    email: '', 
    password: ''
  };

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
          <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
            }}
          >
             {({ errors, touched }) => (

              <Form>
                <legend>Bem vindo</legend>
                <h1>Adote por amor</h1>
                <header>
                  <p>
                    Aqui você encontra seu melhor amigo, que irá trazer um colorido diferente para sua vida.
                  </p>
               
                  {(
                    (errors.email && touched.email) 
                    || (errors.password && touched.password)
                  ) ? (
                    <span id="errorGlobalMessage">
                      Erro nas informações inseridas, tente novamente.
                    </span>
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </header>
               

                <Input 
                  icon={IconSigIn.GoMail}
                  name="email" 
                  type="email"
                  placeholderLabel="E-mail" 
                  spellCheck={false}
                  isErrored={errors.email && touched.email}
                />

                <Input
                  icon={IconSigIn.BsLock}
                  name="password"
                  placeholderLabel="Senha"
                  type="password" 
                  isErrored={errors.password && touched.password}
                />

                <Link href="/ForgotPassword">
                  <div id="forgot_password">
                    <span>Esqueci minha senha</span>
                  </div>
                </Link>

                <button type="submit">Entrar</button>

                <div className="socialContainer">
                  <div>
                    <IconSigIn.FaFacebookF color="#000" size={20} />
                  </div>
                  
                  <div>
                    <IconSigIn.MdEmail color="#000" size={20} />
                  </div>

                  <div>
                    <IconSigIn.FaTwitter color="#000" size={20}/>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>  
    </Container>
  );
};

export default SignIn;
