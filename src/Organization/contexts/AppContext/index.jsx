import P from 'prop-types';
import { createContext, useReducer } from 'react';
import { globalState } from './data';
import { reducer } from '../../reducers/reducer';
import { actions } from '../../actions/actions';

export const Context = createContext();

export const AppContext = ({ children }) => {
  //fazer assim pegando o state inteiro é bem perigoso, não é uma boa técnica a se usar
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => dispatch({ type: actions.CHANGE, payload });
  const incrementCounter = () => dispatch({ type: actions.INCREMENT });

  return (
    //Lembrando q vc pode ter mais de um context, e pode ter context dentro de context
    <Context.Provider value={{ state, changeTitle, incrementCounter }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};
