import { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  //fazer assim pegando o state inteiro é bem perigoso, não é uma boa técnica a se usar
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      {children}
    </GlobalContext.Provider>
  );
};
