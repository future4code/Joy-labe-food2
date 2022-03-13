import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAddressPage, goToLoginPage } from "../routes/coordinator";

export const signUp = (form, navigate, setSpan) => {
  axios
    .post(`${BASE_URL}/signup`, form)
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
      goToAddressPage(navigate);
    })
    .catch((err) => {
      setSpan(err.response.data.message);
    });
};

export const signAddress=(form,navigate,clearFields)=>{
  const config = {
    method: 'put',
    url: BASE_URL + "/address",
    headers: { 'auth': localStorage.getItem('token') },
    data: form,
}
  axios(config)
  .then((res)=>{
    alert('Usuário cadastrado');
    goToLoginPage(navigate)
  }).catch((err)=>{
    alert(err.response.data.message);
  })
  clearFields()
}