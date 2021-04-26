import React, { createContext, useContext, useState } from "react";

interface Section {
  title: string,
  active: boolean,
}

export interface SelectSessionData {
  selectSections: Array<Section>
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
      },
      {
        title: 'Adotar',
        active: false,
      },

    ]
  });

  return (
    <ScrollContext.Provider value={{ selectSections: selectSections }}>
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