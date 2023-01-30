import { actions } from '../actions/actions';
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE: {
      console.log('Mudar titulo');
      return { ...state, title: action.payload };
    }
    case actions.INCREMENT: {
      console.log('Incrementou o contador');
      const counter = state.counter;
      return { ...state, counter: counter + 1 };
    }
  }
  return { ...state };
};
