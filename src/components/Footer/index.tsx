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
            <span style={{marginBottom: '20px'}}>Contato</span>
            <span style={{marginBottom: '14px'}}>
              <img 
                src="/icons/basic/call_phone_light.svg" 
                alt="Call phone icon" 
              />
              (87) 988422864
            </span>
            <span>
              <img 
                src="/icons/basic/mail_light.svg" 
                alt="Mail icon" 
              />
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
