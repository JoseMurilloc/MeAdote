import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { BsFillHeartFill } from 'react-icons/bs';
import { HiUserCircle } from 'react-icons/hi';
import { ImExit } from 'react-icons/im';
import { IoMdHelpCircle } from 'react-icons/io';
import { ActionUser, Container, Content } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import Link from 'next/link';

const HeaderUserSignIn: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { user, isAuthenticated } = useAuth()
  
  const handleToggleMenu = useCallback(() => {
    setToggleMenu(state => !state)
  }, [])

  return (
    <Container>
      <Link href="/Initial">
        <img 
          src="/images/MeAdotaLogo.svg" 
          alt="Logo MeAdota" 
          className="LogoMeAdote"
        />
      </Link>

      <Content>
        <div className="containerFavorite">
          <img src="/icons/user/user_heart.svg" alt="Heart user" />
          <span>Preferidos</span>
        </div>

        <ActionUser>
          <div 
            className="profile" 
            onClick={handleToggleMenu} 
          >
            <div className="containerProfile">
              {isAuthenticated ? (
                <Image 
                  src="/images/profile.png" 
                  alt="Profile"
                  width="38px"
                  height="38px"
                />
              ): (
                <img src="/icons/user/user_circle_o.svg" alt="User" />
              )}
            </div>
            <span>{isAuthenticated ? user.name : 'Entrar'}</span>
          </div>
          <div 
            className={toggleMenu ? 'menu active': 'menu'}
          >
            <h3>Bem vindo(a)</h3>
            <ul>
              <li> 
                <HiUserCircle color="#F3784B" size={20} />  
                <a href="/Authentication/SignUp">Minha conta</a>
              </li>
              <li> 
                <BsFillHeartFill color="#F3784B" size={20} />
                <a href="/Authentication/SignUp">Meus preferidos</a>
              </li>
              <li> 
                <IoMdHelpCircle color="#F3784B" size={20} />
                <a href="/Authentication/SignUp">Ajuda</a>
              </li>
              <li> 
                <ImExit color="#F3784B" size={20} />
                <a href="/Authentication/SignUp">Sair</a>
              </li>
            </ul>
          </div>
        </ActionUser>
      </Content>
    </Container>
  )
}

export default HeaderUserSignIn;