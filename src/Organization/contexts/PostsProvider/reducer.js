import * as types from './types';
export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      return { ...state, posts: action.payload, isLoading: false };
    }
    case types.POSTS_LOADING: {
      return { ...state, isLoading: true };
    }
  }
  console.log('Não foi possível encontrar a action: ', action.type);
  return { ...state };
};
