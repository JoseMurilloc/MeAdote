
import Link from 'next/link';

import Input from '../../components/Input';
import { Container, Header } from './styles';
import { IconForgotPassword } from '../../utils/icons';
import { Form, Formik } from 'formik';
import { ForgotPasswordSchema, FormValues } from './types';


const ForgotPassword: React.FC = () => {
  
  const initialValues: FormValues = { 
    email: '', 
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
            validationSchema={ForgotPasswordSchema}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
            }}
          >
             {({ errors, touched }) => (
                <Form>
                  <legend>Bem vindo</legend>
                  <h1>Adote por amor</h1>
                  <p>
                    Aqui você encontra seu melhor amigo, que irá trazer um colorido diferente para sua vida.
                  </p>

                  <Input 
                    icon={IconForgotPassword.GoMail}
                    name="email" 
                    type="email"
                    placeholderLabel="E-mail"
                    spellCheck={false}
                    isErrored={errors.email && touched.email}
                  />

                
                  <button type="submit">
                    Entrar
                  </button>
                </Form>
             )}
         </Formik>
        </div>
      </div>  
    </Container>
  );
};

export default ForgotPassword;
