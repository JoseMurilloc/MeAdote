import React, { createContext, useContext, useEffect, useState } from "react";

interface Section {
  title: string,
  active: boolean,
}

export interface SelectSessionData {
  selectSections: Array<Section>
  handleScroll(event: any): void;
}

const ScrollContext = createContext<SelectSessionData>({} as SelectSessionData)

const ScrollProvider: React.FC = ({ children }) => {
  const [selectSections, setSelectSections] = useState<Section[]>(() => {
    return [
      {
        title: 'Inicial',
        active: true,
      },
      {
        title: 'Quem somos?',
        active: false,
      },
      {
        title: 'Ajude',
        active: false,
      },
      {
        title: 'Adotar',
        active: false,
      }
    ]
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  function handleScroll(event: any) {
  }

  return (
    <ScrollContext.Provider value={{ 
      selectSections,
      handleScroll 
    }}>
      {children}
    </ScrollContext.Provider>
  )
}


function useScroll(): SelectSessionData {
  const context = useContext(ScrollContext);

  if (!context) {  
    throw new Error('useAuth must be used within a Authentication')
  }

  return context;
}

export { ScrollProvider, useScroll }