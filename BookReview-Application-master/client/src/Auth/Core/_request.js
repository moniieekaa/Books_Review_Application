import axios from "axios";
const URL = process.env.REACT_APP_API_URL;
console.log("API URL in authService.js:", URL);

export const LOGIN_URL = `${URL}/auth/login`;
export const REGISTER_URL = `${URL}/auth/register`;

export function login(email, password, fcmtoken) {
  return axios.post(LOGIN_URL, { email, password, fcmtoken });
}

export const register = async (email, username, password) => {
  try {
    const response = await axios.post(REGISTER_URL, {
      email,
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
