import React, { useEffect, useState } from "react";
import HeaderUserSignIn from "../../components/HeaderUserSignIn";
import Input from "../../components/Input";
import { Container, ModalDetailsPet } from "./styles";
import { Form, Formik } from "formik";
import { FormValues } from "./types";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/router";
import api from "../../services/api";
import Link from "next/link";

export default function Adopt() {

  const route = useRouter()
  const {id} = route.query

  const [activeIndexImage, setActiveIndexImage] = useState(0);

  useEffect(() => {
    console.log(id)
  }, [])

  const initialValues: FormValues = {
    email: "",
    phone: "",
    name: "",
  };

  return (
    <Container>
      <HeaderUserSignIn />
      <div className="contentMain">
        <ModalDetailsPet>
          <div className="containerFlex">
            <div className="containerImages">
              <img 
                src="https://edch.org.uk/wp-content/uploads/2019/03/Meet-our-Dogs-580x340.jpg" 
                alt="pet"
              />
              <div className="images">
                  {[0, 1, 2].map((_, index) => (
                    <button 
                      className={activeIndexImage === index ? 'active': ''}
                      type="button"
                      onClick={() => {}}
                    >
                      <img 
                        src="https://edch.org.uk/wp-content/uploads/2019/03/Meet-our-Dogs-580x340.jpg" 
                        alt="Dog"
                      />
                    </button>
                  ))}
                </div>
            </div>
            <div className="info">
              <h1>Name</h1>
              <div className="description">
                <p>
                  Modéstia à parte, eu não sou linda? Meu nome é Lua e eu adoro brincar. Tudo o que eu mais quero é encontrar uma família que me ame e se importe comigo. Quer me adotar?
                </p>
              </div>
              <div className="infoPetCards">
                <aside>
                  Cadastrada
                </aside>
                <aside className="yellow-gradient">
                  Vacinada
                </aside>
                <aside className="red-gradient">
                  femia
                </aside>
                <aside className="green-gradient">
                  1 ano
                </aside>
              </div>
              <div className="detailsPerson">
                <h3>Comportamento:</h3>
                <span>Carinhosa, convive com catos e crianças</span>
              </div>
              <button>
                <FaHeart color="#FFF" size={20} />
                <span>Preferido</span>
              </button>
            </div>
          </div>
        </ModalDetailsPet>
        
        <Formik
          initialValues={initialValues}
          validationSchema={{}}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <img 
                src="/images/newFriendLogo.png"
                className="newFriendLogo"
              />
              <legend>Formulario de adoção</legend>

              <Input
                icon="user/user_circle.svg"
                name="name" 
                placeholderLabel="Digite seu nome" 
                spellCheck={false}
                isErrored={errors.name && touched.name}
              />

              <Input
                icon="basic/mail.svg"
                name="email" 
                type="email"
                placeholderLabel="Digite seu e-mail"
                spellCheck={false}
                isErrored={errors.email && touched.email}
              />

              <Input
                icon="basic/call_phone.svg"
                name="phone"
                placeholderLabel="Digite seu telefone"
                type="phone"
                isErrored={errors.phone && touched.phone} 
              />

              <div className="buttonSend">
                <button type="submit">Enviar</button>
              </div>

              <div style={{width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <span>
                  Dúvidas sobre cuidados?
                  <Link href="/">Clique aqui</Link>
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>


    </Container>
  );
}
