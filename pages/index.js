import withRedux from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import { user } from '../reducers/user';
import { readUserSuccessByServer } from '../reducers/user';
import User from '../components/User';


// init state
const initialState = {
  name: null,
  bio: null
};

const initStore = () => {
  return createStore(user, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

const Index = () => {
  return (
    <User />
  );
};

Index.getInitialProps = async ({ store, isServer }) => {
  const res = await fetch('https://api.github.com/users/tj');
  const data = await res.json();

  store.dispatch(readUserSuccessByServer(data));
};

export default withRedux(initStore, null)(Index);
