import Link from 'next/link';
import Input from '../../components/GlobalPages/Input';

import { Container, Header } from './styles';
import { IconSigUp } from '../../utils/icons';
import { Form, Formik } from 'formik';
import { FormValues, SignUpSchema } from './types';

const SignUp: React.FC = () => {

  const initialValues: FormValues = { 
    email: '', 
    password: '',
    phone: '',
    name: '',
    password_confirmation: ''
  };


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
        </div>
      </div>  
    </Container>
  );
};

export default SignUp;
