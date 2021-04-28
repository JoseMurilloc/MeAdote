
import Link from 'next/link';
import { SelectSessionType } from '../../ModalWrapper';
import { Container } from './styles';

interface HeaderProps {
  selectSections?: SelectSessionType[];
}

export function Header({selectSections}: HeaderProps) {
  return (
    <Container>
      <div className="content">
        <img src="/images/MeAdotaLogo.svg" alt="Logo page"/>

        <nav>
          <ul>
            {selectSections.map(section => (
              <li 
                key={Math.random()}
                className={section.active ? 'activeSection' : ''}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </nav>

        <aside>
          <button id="openButton">
            Entrar
          </button> 
          <button id="registerButton">
            Cadastrar
          </button>
        </aside>
      </div>    
    </Container>
  );
};
