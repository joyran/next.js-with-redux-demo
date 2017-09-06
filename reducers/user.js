import fetch from 'isomorphic-fetch';
import { createActions, handleActions } from 'redux-actions';

// ------------------------
// ACTIONS
// ------------------------
export const {
  readUserSuccess,
  readUserSuccessByServer
} = createActions(
  'READ_USER_SUCCESS',
  'READ_USER_SUCCESS_BY_SERVER'
);

export const readUser = () => dispatch => {
  fetch('https://api.github.com/users/a')
    .then(res => res.json())
    .then(res => dispatch(readUserSuccess(res)))
    .catch((err) => {
      console.error(err.message);
    });
};

// ------------------------
// REDUCERS
// ------------------------
export const user = handleActions({
  READ_USER_SUCCESS: (state, action) => ({
    ...state,
    name: action.payload.name,
    bio: action.payload.bio
  }),

  READ_USER_SUCCESS_BY_SERVER: (state, action) => ({
    ...state,
    name: action.payload.name,
    bio: action.payload.bio
  })
}, {});
