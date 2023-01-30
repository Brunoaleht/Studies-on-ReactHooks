//Não é uma boa fazer uso do useImperativeHandle,
//E tomar cuidado tbm quando for passar props por meio de ref com o forwardRef
import P from 'prop-types';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './styles.css';

function App() {
  const [counted, setCounted] = useState([1, 2, 3, 4]);
  const divRef = useRef();

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
    divRef.current.handleClick();
  };

  //muito utilizado para chats
  useEffect(() => {
    divRef.current.divReff.scrollTop = divRef.current.divReff.scrollHeight;
  });

  //Um exemplo da possibilidade de usar useLayoutEffect
  //ele é usado para quando vc quer q sua pagina no browser carregue junto com o componente modificado
  //de for síncrona
  // useLayoutEffect(() => {
  //   //cuidado na utilização do while, pois ele trava o seu Browser
  //   //isso aqui é para simular um componente pesado:
  //    ////const now = Date.now();
  //   ////while (Date.now() < now + 600)
  //  //isso aqui é para simular um componente pesado;
  //     divRef.current.scrollTop = divRef.current.scrollHeight;
  // });

  return (
    <>
      <button onClick={handleClick}>count: {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef} />
    </>
  );
}

export const DisplayCounted = forwardRef(function DisplayCounted(
  { counted },
  ref,
) {
  const [rand, setRand] = useState('0.24');
  const divReff = useRef();
  const handleClick = () => setRand(Math.random().toFixed(2));
  useImperativeHandle(ref, () => ({
    handleClick,
    divReff: divReff.current,
  }));
  return (
    <div
      ref={divReff}
      style={{ width: '100px', height: '100px', overflowY: 'scroll' }}
    >
      {counted.map((c) => {
        return (
          <p key={`c-${c}`} onClick={handleClick}>
            {c}+++{rand}
          </p>
        );
      })}
    </div>
  );
});
DisplayCounted.propTypes = {
  counted: P.array,
};

export default App;
