import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import { StyledButton, StyledTextField } from './styled';

const FormEditProfile = ({dataProfile}) => {
	const { form, onChangeForm } = useForm({
		name: dataProfile.user && dataProfile.user.name,
		email: dataProfile.user && dataProfile.user.email,
		cpf: dataProfile.user && dataProfile.user.cpf,
	      });
	      const editProfile = (e) => {
		e.preventDefault();
		const body = form;
		const headers = {
		  headers: {
		    auth: localStorage.getItem("token"),
		  },
		};
		axios
		  .put(`${BASE_URL}/profile`, body, headers)
		  .then((res) => {
		    alert("Usuário atualizado");
		  })
		  .catch((err) => {
		    console.log(err.response.data.message);
		  });
		
	      };
  return (
	<form onSubmit={editProfile} method="PUT">
	<StyledTextField
	  id="outlined-basic"
	  type="text"
	  placeholder="Nome"
	  required
	  label="Nome"
	  variant="outlined"
	  name="name"
	  value={form.name}
	  onChange={onChangeForm}
	/>

	<StyledTextField
	  id="outlined-basic"
	  type="email"
	  placeholder="email@email.com"
	  required
	  label="E-mail"
	  variant="outlined"
	  name="email"
	  value={form.email}
	  onChange={onChangeForm}
	/>
	<StyledTextField
	  id="outlined-basic"
	  type="cpf"
	  placeholder="CPF"
	  required
	  label="CPF"
	  variant="outlined"
	  name="cpf"
	  value={form.cpf}
	  onChange={onChangeForm}
	/>
	<StyledButton
	  textPrimary={"primary"}
	  color={"primary"}
	  fullWidth
	  variant="contained"
	  type="submit"
	>
	  Salvar
	</StyledButton>
      </form>
  )
}

export default FormEditProfile