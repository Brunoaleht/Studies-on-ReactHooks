// import { Children, cloneElement } from 'react';
import { createContext, useContext, useState } from 'react';
import './styles.css';

const s = {
  style: {
    fontSize: '60px',
  },
};
//Exemplo de como usar Children e cloneElement
// export const Parent = ({ children }) => {
//   return Children.map(children, (child) => {
//     const newChild = cloneElement(child, { ...s },
//        show: false,
//        cuidado: () => 123);//isso só nos meus proprios components e não nos do component jsx padrôes
//     return newChild;
//   });
// };

export const TurnOnOffContext = createContext();
//Compound Components
export const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);
  return (
    <TurnOnOffContext.Provider value={{ isOn, onTurn }}>
      {children}
    </TurnOnOffContext.Provider>
  );
  // return Children.map(children, (child) => {
  //   //Esse if me permite colocar jsx no meio dos meus compound components, mas não envolta.
  //   if (typeof child.type === 'string') {
  //     return child;
  //   }
  //   const newChild = cloneElement(child, {
  //     isOn,
  //     onTurn,
  //   });
  //   return newChild;
  // });
};
const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};
const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};
const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return (
    <button onClick={onTurn} {...props}>
      Turn: {isOn ? 'OFF' : 'ON'}
    </button>
  );
};
const P = ({ children }) => <p {...s}>{children}</p>;

function App() {
  return (
    //Compound Components
    <TurnOnOff>
      <div>
        <TurnedOn>
          <P>As coisas q vão acontecer quando estiver ON.</P>
        </TurnedOn>
        <TurnedOff>
          <P>Aqui vem as coisas quando estiver OFF.</P>
        </TurnedOff>
        <TurnButton {...s} />
      </div>
    </TurnOnOff>
  );
}

export default App;
