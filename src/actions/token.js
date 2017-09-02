export const login = token => {
  return {
    type: 'LOGIN',
    token,
  }
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  }
};
