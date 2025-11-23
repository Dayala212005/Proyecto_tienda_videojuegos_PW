export const logout = () => {
  localStorage.removeItem("token");   // borra el token
  window.location.href = "/login";    // redirige
};
