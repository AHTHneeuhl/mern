import axios from "axios";

const API_URL = "/api/users/";

const register = async (user) => {
  const res = await axios.post(API_URL, user);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

const authService = {
  register,
};

export default authService;
