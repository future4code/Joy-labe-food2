import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import { StyledButton, StyledTextField } from './styled';

const FormEditAddressPage = ({dataAddress}) => {
	const { form, onChangeForm, clearFields } = useForm({
		street: dataAddress.address && dataAddress.address.street,
		 number: dataAddress.address && dataAddress.address.number,
		 complement: dataAddress.address && dataAddress.address.complement,
		 neighbourhood:dataAddress.address && dataAddress.address.neighbourhood,
		 city: dataAddress.address && dataAddress.address.city,
		 state: dataAddress.address && dataAddress.address.state
	       });
	     
	       const editAddress = (e) => {
		 e.preventDefault();
		 const headers = {
		   headers: {
		     auth: localStorage.getItem("token"),
		   },
		 };
		 axios
		   .put(`${BASE_URL}/address`, form, headers)
		   .then(({ data }) => {
		     alert("Endereço atualizado com sucesso");
		   })
		   .catch((err) => {
		     console.log(err.response.data.message);
		   });
		   clearFields()
	       };
  return (
	  <>	<h1>Meu Endereço</h1>
        <form onSubmit={editAddress} method="PUT">
          <StyledTextField
            id="outlined-basic"
            type="text"
            placeholder="Rua/Av"
            required
            autoComplete
            label="Logradouro"
            variant="outlined"
            name="street"
            value={form.street}
            onChange={onChangeForm}
          />

          <StyledTextField
            id="outlined-basic"
            type="number"
            placeholder="Número"
            required
            autoComplete
            label="Número"
            variant="outlined"
            name="number"
            value={form.number}
            onChange={onChangeForm}
          />
          <StyledTextField
            id="outlined-basic"
            type="text"
            placeholder="Apto./Bloco"
            required
            autoComplete
            label="Complemento"
            variant="outlined"
            name="complement"
            value={form.complement}
            onChange={onChangeForm}
          />
          <StyledTextField
            id="outlined-basic"
            type="text"
            placeholder="Bairro"
            required
            autoComplete
            label="Bairro"
            variant="outlined"
            name="neighbourhood"
            value={form.neighbourhood}
            onChange={onChangeForm}
          />
          <StyledTextField
            id="outlined-basic"
            type="text"
            placeholder="Cidade"
            required
            autoComplete
            label="Cidade"
            variant="outlined"
            name="city"
            value={form.city}
            onChange={onChangeForm}
          />
          <StyledTextField
            id="outlined-basic"
            type="text"
            placeholder="Estado"
            required
            autoComplete
            label="Estado"
            variant="outlined"
            name="state"
            value={form.state}
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
	</>

  )
}

export default FormEditAddressPage