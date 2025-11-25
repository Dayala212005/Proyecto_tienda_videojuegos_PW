export const logout = () => {
  localStorage.removeItem("token");   // borra el token
  window.location.href = "https://proyecto-tienda-videojuegos-pw-frontend.onrender.com";    // redirige
};
