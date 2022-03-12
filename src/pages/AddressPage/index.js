import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import useForm from "../../hooks/useForm";
import { signAddress } from "../../services/user";
import { Container, StyledButton, StyledTextField } from "./styled";

const AddressPage = () => {
  const { form, onChangeForm, clearFields } = useForm({
    street: "",
    number: "",
    complement: "",
    neighbourhood: "",
    city: "",
    state: "",
  });
const navigate= useNavigate()
  const addAddress=(e)=>{
    e.preventDefault();
   signAddress(form,navigate,clearFields)
  }
  return (
    <>
      <Header />
      <Container>
        <h1>Meu Endereço</h1>
        <form onSubmit={addAddress} method="PUT">
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
      </Container>
    </>
  );
};
export default AddressPage;
