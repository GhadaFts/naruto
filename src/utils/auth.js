export const fakeLogin = (role) => {
    localStorage.setItem('role', role);
  };
  export const fakeLogout = () => {
    localStorage.removeItem('role');
  };
  export const getRole = () => localStorage.getItem('role');
  