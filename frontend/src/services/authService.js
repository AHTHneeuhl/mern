import axios from "axios";

const API_URL = "/api/users/";

const register = async (user) => {
  const res = await axios.post(API_URL, user);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

const login = async (user) => {
  const res = await axios.post(`${API_URL}/login`, user);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
