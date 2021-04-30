
import Link from 'next/link';

import Input from '../../components/Input';
import { Container, Header } from './styles';
import { IconForgotPassword } from '../../utils/icons';
import { Form, Formik } from 'formik';
import { ForgotPasswordSchema, FormValues } from './types';
import Image from 'next/image';


const ForgotPassword: React.FC = () => {
  
  const initialValues: FormValues = { 
    email: '', 
  };


  return (
    <Container>
      <Image 
        src="/images/dogCity.png"
        alt="Dog city"
        width="250px"
        height="100vh"
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

                    {(
                      (errors.email && touched.email) 
                      || (errors.email && touched.email)
                    ) ? (
                      <div id="errorGlobalMessage">
                        <span>
                          {errors.email}
                        </span>
                      </div>
                    ) : (
                      <div>&nbsp;</div>
                    )}

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
