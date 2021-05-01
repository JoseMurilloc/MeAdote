
import { ContainerContent } from './styles';
import { IconForgotPassword } from '../../../utils/icons';
import { Form, Formik } from 'formik';
import { ForgotPasswordSchema, FormValues } from './types';
import { Authentication } from '..';
import Input from '../../../components/Input';


const ForgotPassword: React.FC = () => {
  
  const initialValues: FormValues = { 
    email: '', 
  };


  return (
    <Authentication>
      <ContainerContent>
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
      </ContainerContent>
    </Authentication>
  );
};

export default ForgotPassword;
