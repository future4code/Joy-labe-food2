import React from "react";
import { Header } from "../../components/Header";
import useForm from "../../hooks/useForm";
import { Container, StyledButton, StyledTextField } from "./styled";

const AddressPage = () => {
  const { form, onChangeForm, clearFields } = useForm({
    logradouro: "",
    number: "",
    complemento: "",
    bairro: "",
    city: "",
    state: "",
  });
  return (
    <>
      <Header />
      <Container>
        <h1>Meu Endereço</h1>
        <form>
          <StyledTextField
            id="outlined-basic"
            type="text"
            placeholder="Rua/Av"
            required
            autoComplete
            label="Logradouro"
            variant="outlined"
            name="logradouro"
            value={form.logradouro}
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
            name="complemento"
            value={form.complemento}
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
            name="bairro"
            value={form.bairro}
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
            value={form.cidade}
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
