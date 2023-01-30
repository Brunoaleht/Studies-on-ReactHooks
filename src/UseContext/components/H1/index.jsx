import { useContext } from 'react';
import { GlobalContext } from '../../contexts/App';
//eslint-disable-next-line
export const H1 = () => {
  //sempre q usar o React.createContext,  para pegar as propriedades do value é obrigado a usar useContext
  const theContext = useContext(GlobalContext);
  //sem muito esforço e sem utilizar props passada de pai para filho eu peguei uma prop q foi passada para o componente App, sem ter q passar para os pais dos outro component via props

  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title}, Contador: {counter}
    </h1>
  );
};
