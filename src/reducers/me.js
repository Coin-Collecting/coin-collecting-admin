import cookie from 'react-cookies'

let coinMe = cookie.load('coinMe');
const initialState = coinMe ? coinMe : {
  loggedIn: false,
};

const me = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ME':
      if (action.me) {
        cookie.save('coinMe', action.me);
        let { username, email, admin } = action.me;
        return {
          username,
          email,
          admin,
          loggedIn: true,
        };
      } else {
        return {
          loggedIn: false,
        }
      }
    case 'LOGOUT':
      cookie.remove('coinMe');
      return {
        loggedIn: false,
      };
    default:
      return state
  }
};

export default me
