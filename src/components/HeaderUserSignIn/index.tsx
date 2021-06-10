import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { RiUserHeartLine } from 'react-icons/ri';
import { BsFillHeartFill } from 'react-icons/bs';
import { HiUserCircle } from 'react-icons/hi';
import { ImExit } from 'react-icons/im';
import { IoMdHelpCircle } from 'react-icons/io';
import { useAuth } from '../../hooks/AuthContext';
import { ActionUser, Container, Content } from './styles';

const HeaderUserSignIn: React.FC = () => {
  const { user } = useAuth()
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const handleToggleMenu = useCallback(() => {
    setToggleMenu(state => !state)
  }, [])

  return (
    <Container>
      <Image
        src="/images/MeAdotaLogo.svg"
        width="56px"
        height="54px"
      />

      <Content>
        <div className="containerFavorite">
          <RiUserHeartLine color="#2E3A59" size={20} />
          <span style={{marginTop: 6}} >Preferidos</span>
        </div>

        <ActionUser>
          <div 
            className="profile" 
            onClick={handleToggleMenu} 
          >
            <div className="containerProfile">
              <Image 
                src="/images/profile.png" 
                alt="Profile"
                width="38px"
                height="38px"
              />
            </div>
            <span>{user?.name}</span>
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