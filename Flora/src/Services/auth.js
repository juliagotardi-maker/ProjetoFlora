export const getToken = () => localStorage.getItem("token");

export const getUser = () => {
  const user = localStorage.getItem("usuario");
  return user ? JSON.parse(user) : null;
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
};