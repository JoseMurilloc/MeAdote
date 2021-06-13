import React from "react";
import HeaderUserSignIn from "../components/HeaderUserSignIn";
import { Container } from "../styles/404.styles";

export default function NotFound() {
  return (
    <Container>
      <HeaderUserSignIn />
     <main>
      <div className="content">
          <h1>Pagina não encontrada</h1>
          <p>
            O que foi pesquisado não foi encontrado, volte para a pagina inicial de busca.
          </p>
          <button>Voltar</button>
        </div>
        <img src="/images/Dog404.png" alt="" />
     </main>
    </Container>
  )
}