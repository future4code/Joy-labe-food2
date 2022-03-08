import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAddressPage } from "../routes/coordinator";
export const signUp = (form, navigate, setSpan) => {
  axios
    .post(`${BASE_URL}/signup`, form)
    .then(({ data }) => {
      alert("Usuário cadastrado com sucesso");

      localStorage.setItem("token", data.token);
      goToAddressPage(navigate);
    })
    .catch((err) => {
      setSpan(err.response.data.message);
    });
};
