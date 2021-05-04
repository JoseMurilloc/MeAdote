import Input from '../../../components/Input';

import { ContainerContent } from './styles';
import { IconSigUp } from '../../../utils/icons';
import { Form, Formik } from 'formik';
import { FormValues, SignUpSchema } from './types';
import React from 'react';
import { Authentication } from '..';

const SignUp: React.FC = () => {

  const initialValues: FormValues = { 
    email: '', 
    password: '',
    phone: '',
    name: '',
    password_confirmation: ''
  };


  return (

    <Authentication>

      <ContainerContent>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
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

              <Input 
                icon={IconSigUp.BiUserCircle}
                name="name" 
                placeholderLabel="name" 
                spellCheck={false}
                isErrored={errors.name && touched.name}
              />

              <Input 
                icon={IconSigUp.GoMail}
                name="email" 
                placeholderLabel="E-mail" 
                spellCheck={false}
                isErrored={errors.email && touched.email}
              />

              <Input
                icon={IconSigUp.BsLock}
                name="password"
                placeholderLabel="Senha"
                type="password"
                isErrored={errors.password && touched.password}
              />

              <Input
                icon={IconSigUp.BsLock}
                name="password_confirmation"
                placeholderLabel="Confirmar Senha"
                type="password" 
                isErrored={
                  errors.password_confirmation 
                  && touched.password_confirmation
                }
              />

              <Input
                icon={IconSigUp.FiPhoneCall}
                name="phone"
                placeholderLabel="Telefone"
                type="phone"
                isErrored={errors.phone && touched.phone} 
              />

              <button type="submit">Cadastrar</button>
            </Form>
          )}
        </Formik>
      </ContainerContent>
    </Authentication>
  );
};

export default SignUp;