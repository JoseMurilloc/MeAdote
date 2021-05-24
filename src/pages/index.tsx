import Head from 'next/head';
import {
  Start,
  About,
  Help,
  AdoptionFriend,
  Container
} from '../styles/home.styles'
import { Footer } from '../components/Footer'
import { IconHome } from '../utils/icons'

import Card from '../components/Card';
import { GetServerSideProps } from 'next';
import { Header } from '../components/Header';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Animal } from '../hooks/types/modal';

export default function Home() {

  const [animal, setAnimal] = useState<Animal[]>();

  useEffect(() =>{
    api.get('/animals?_page=1&_limit=12')
      .then(response => {
        setAnimal(response.data)
      })
      .catch(err => console.error(err))
  }, [])
    
  return (
    <>
      <Head>
        <title>Início | Me Adote</title>
      </Head>

      <Header />
      <Container>
        <Start>
          <aside>
            <h1>Me Adote</h1>
            <p>
              Adote seu novo melhor amigo aqui e tenha uma vida repleta de amor todos os dias, amor e carinho todos os dias.
            </p>
            <button>
              Adote
              <IconHome.BsFillHeartFill color="#FFF" />
            </button>
          </aside>
          <aside>
            <img src="/images/dog.png" alt="dog"/>
          </aside>
        </Start>
        <About>
          <aside>
            <div className="green">
              <IconHome.SiDatadog size={20} color="#FFF" />
            </div>
            <div className="yellow">
              <IconHome.GiCat size={20} color="#FFF" />
            </div>
            <div>
              <IconHome.BsFillHeartFill size={20} color="#FFF" />
            </div>
            <div className="purple">
              <IconHome.GiDogBowl size={20} color="#FFF" />
            </div>
          </aside>
          <main>
            <section className="content">
                <h1>Me adota!</h1>
                <p>
                  Somos um abrigo bem popular em petrolina por suas ações desde 2015, realizamos busca de animais abandonados pela cidade e cuidamos com muito amor, castrando, realizando os exames necessários para o bem estar do animalzinho e colocando para a adoção em perfeito estado.Conseguindo até hoje realizar todo esse progresso com a ajuda de todos!
                </p>
            </section>
            <section className="team">
              <img src="/images/team.png" alt=""/>
            </section>
          </main>
        </About>
        <Help>
          <header>
            <img src="/images/dogHappy.png" alt="Dog happy"/>

            <aside>
              <h1>
                😻 Nos ajudem a continuarem nos resgatando 🐕
              </h1>
              <p>Se você doar qualquer valor para a instituição que cuida da gente, vamos continuar sendo resgatados, e eu vou poder ter uma casinha e um dono que me ame pra chamar de meu.</p>
            </aside>
          </header>
          <main>
            <h1>Nossas contas dísponiveis para doações</h1>
            <section>
              <div className="card">
                <img src="/banks/nubank.png" alt="Bank"/>
                <span>Agência 0001</span>
                <span>Conta 56485-6</span>
                <span>PIX: 012563</span>
              </div>
              <div className="card">
                <img src="/banks/BB.png" alt="Bank"/>
                <span>Agência 0001</span>
                <span>Conta 56485-6</span>
                <span>PIX: 012563</span>
              </div>
              <div className="card">
                <img src="/banks/santander.png" alt="Bank"/>
                <span>Agência 0001</span>
                <span>Conta 56485-6</span>
                <span>PIX: 012563</span>
              </div>
              <div className="card">
                <img src="/banks/itau.png" alt="Bank"/>
                <span>Agência 0001</span>
                <span>Conta 56485-6</span>
                <span>PIX: 012563</span>
              </div>
            </section>
          </main>
        </Help>        
        <AdoptionFriend>
          <legend>
            Disponíveis para adoção
          </legend>
          <div className="containerViewMore">
            <button className="viewMore">
              Ver mais
            </button>
          </div>
          <aside>
              {animal?.map(animal => (
                <div>
                  <Card 
                    photo={animal.photo}
                    key={animal.id}
                    name={animal.name} 
                    age={animal.age}
                    gender={animal.gender}
                    animal={animal}
                  />
                </div>
              ))}
          </aside>
        </AdoptionFriend>
        <Footer />
      </Container>
    </>
  )
}
