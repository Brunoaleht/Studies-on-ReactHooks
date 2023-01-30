import { useContext, useRef } from 'react';
import { Context } from '../../contexts/AppContext';
//eslint-disable-next-line
export const H1 = () => {
  const theContext = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => theContext.changeTitle(inputRef.current.value)}>
        {theContext.state.title}, Contador: {theContext.state.counter}
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
};
