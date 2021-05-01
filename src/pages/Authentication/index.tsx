import Link from 'next/link';
import Image from 'next/image';

import { Container, Header } from './styles';
import React from 'react';

export const Authentication: React.FC = ({children}) => {
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
            <Link href="/Authentication/SignIn">
              <button id="openButton">
                Entrar
              </button>
            </Link>
            <Link href="/Authentication/SignUp">
              <button id="registerButton">
                Cadastrar
              </button>
            </Link>
          </aside>
        </Header>
          {children}
      </div>  
    </Container>
  );
};
