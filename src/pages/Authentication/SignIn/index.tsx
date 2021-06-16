import { Formik, Form } from 'formik'

import Link from 'next/link';
import Input from '../../../components/Input';

import { ContainerContent } from './styles';
import { IconSigIn } from '../../../utils/icons'
import { FormValues, SignInSchema } from './types';
import { useToast } from '../../../hooks/ToastContext';
import { Authentication } from '..';
import { useCallback } from 'react';

const SignIn: React.FC = () => {
  const initialValues: FormValues = { 
    email: '', 
    password: ''
  };

  const {success, error} = useToast()

  const handleSubmitForm = useCallback(async (values: FormValues) => {
    
    const { email, password } = values
    
    try { 
      const credentials = {
        email,  
        password,  
      }
      console.log(credentials)
      
      success("Success login")
    } catch {
      error("Error login")
    }

  }, [])

  return (
    <ContainerContent>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values, actions) => 
          handleSubmitForm(values)
        }
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
                <div id="errorGlobalMessage">
                  <span>
                    Erro nas informações inseridas, tente novamente.
                  </span>
                </div>
              ) : (
                <div>&nbsp;</div>
              )}
            </header>
            

            <Input 
              icon="user/user_circle.svg"
              name="email" 
              type="email"
              placeholderLabel="E-mail" 
              spellCheck={false}
              isErrored={errors.email && touched.email}
            />

            <Input
              icon="basic/lock.svg"
              name="password"
              placeholderLabel="Senha"
              type="password" 
              isErrored={errors.password && touched.password}
            />

            <Link href="ForgotPassword">
              <div id="forgot_password">
                <span>Esqueci minha senha</span>
              </div>
            </Link>

            <button type="submit">Entrar</button>

            <div className="socialContainer">
              <div>
                <IconSigIn.FaFacebookF color="#393A3A" size={20} />
              </div>
              
              <div>
                <IconSigIn.MdEmail color="#393A3A" size={20} />
              </div>

              <div>
                <IconSigIn.FaTwitter color="#393A3A" size={20}/>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </ContainerContent> 
  );
};

export default SignIn;
