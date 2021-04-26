import {
  Container,
  FooterContainer,
  SociaisContainer,
  ContactContainer,
} from './styles'
import {AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {IoMdMail} from 'react-icons/io'
import {ImPhone} from 'react-icons/im'

export function Footer() {
  return (
    <Container>
      <FooterContainer>
        <SociaisContainer>
          <div>
            <AiFillYoutube size={25} color="#d267a1" />
          </div>
          <div>
            <AiFillInstagram size={25} color="#d267a1" />
          </div>
        </SociaisContainer>
        <ContactContainer>
         <div>
            <span>Contato</span>
            <span>
              <ImPhone color="#FFF" />
              (87) 988422864
            </span>
            <span>
              <IoMdMail color="#FFF" />
              Meadotadog@gmail.com
            </span>
         </div>
         <div>
           <button>Login</button>
         </div>
        </ContactContainer>
      </FooterContainer>
    </Container>
  )
}
