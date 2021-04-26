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
  const {selectSections} = useScroll()

  const wrapperRef = useRef<HTMLDivElement>();

  useEffect(() => {
    console.log(wrapperRef.current.scrollHeight / 4)
  }, [])

  return (
    <Container ref={wrapperRef}>
      <Header selectSections={selectSections} />
      {children}
    </Container>
  );
};

export default ModalWrapper;
