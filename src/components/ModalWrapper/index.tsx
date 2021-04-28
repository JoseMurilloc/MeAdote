import { ReactNode, useEffect, useRef, useState } from 'react';
import { useScroll } from '../../hooks/ScrollContext';
import { Header } from '../GlobalPages/Header';

import { Container } from './styles';

interface ModalWrapperProps {
  children: ReactNode;
}

export type SelectSessionType = {
  title: string,
  active: boolean,
}

function ModalWrapper({ children }: ModalWrapperProps) {
  const {selectSections, handleScroll} = useScroll()
  const [heightScreen, setHeightScreen] = useState<number>();

  const wrapperRef = useRef<HTMLDivElement>();


  useEffect(() => {
    setHeightScreen(wrapperRef.current.scrollHeight / 4)
  }, [])

  return (
    <Container 
      ref={wrapperRef}
      onScroll={() => console.log('Scroll px')}
    >
      <Header selectSections={selectSections} />
      {children}
    </Container>
  );
};

export default ModalWrapper;
