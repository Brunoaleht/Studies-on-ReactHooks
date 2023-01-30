import { useContext } from 'react';
import { Context } from '../../contexts/AppContext';
//eslint-disable-next-line
export const P = () => {
  const theContext = useContext(Context);
  return (
    <p onClick={() => theContext.incrementCounter()}>{theContext.state.body}</p>
  );
};
