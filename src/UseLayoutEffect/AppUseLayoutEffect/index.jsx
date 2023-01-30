import { useEffect, useRef, useState } from 'react';
import './styles.css';

function App() {
  const [counted, setCounted] = useState([1, 2, 3, 4]);
  const divRef = useRef();

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  //muito utilizado para chats
  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
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
      <div
        ref={divRef}
        style={{ width: '100px', height: '100px', overflowY: 'scroll' }}
      >
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>;
        })}
      </div>
    </>
  );
}

export default App;
