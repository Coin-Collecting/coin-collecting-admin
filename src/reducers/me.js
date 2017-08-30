import cookie from 'react-cookies'

let cookieToken = cookie.load('coinToken');
const initialState = {
  token: cookieToken ? cookieToken : null,
  loggedIn: cookieToken ? true : false,
};

const me = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      cookie.save('coinToken', action.token);
      return {
        token: action.token,
        loggedIn: true,
      };
    case 'LOGOUT':
      cookie.remove('coinToken');
      return {
        token: null,
        loggedIn: false,
      };
    default:
      return state
  }
};

export default me;
