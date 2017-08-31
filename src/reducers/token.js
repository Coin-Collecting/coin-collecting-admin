import cookie from 'react-cookies'

let cookieToken = cookie.load('coinToken');
const initialState = cookieToken ? cookieToken : null;

const token = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      cookie.save('coinToken', action.token);
      return action.token;
    case 'LOGOUT':
      cookie.remove('coinToken');
      return null;
    default:
      return state
  }
};

export default token;
