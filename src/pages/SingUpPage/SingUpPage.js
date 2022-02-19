import React from "react"
import { Header } from "../../components/Header"
import { Container, StyledTextField, StyledButton } from "./styled"
import useForm from "../../hooks/useForm"
import logo from "../../assets/images/logo-future-eats-red.png"
import { useNavigate } from "react-router-dom"
import { goToAddressPage } from "../../routes/coordinator"

const SingUpPage = () => {
  const { form, onChangeForm, clearFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  })

  const navigate = useNavigate()

  return (
    <div>
      <Header/>
      <Container>
        <img src={logo} alt="logo red" />
        <h1>Cadastrar</h1>
        <form>
          <StyledTextField
            id="outlined-basic"
            name="name"
            label="Nome"
            placeholder="Nome e Sobrenome"
            variant="outlined"
            value={form.name}
            onChange={onChangeForm}
            type="text"
            required
          />
          <StyledTextField
            id="outlined-basic"
            name="email"
            label="E-mail"
            placeholder="email@email.com"
            variant="outlined"
            value={form.email}
            onChange={onChangeForm}
            type="email"
            required
          />
          <StyledTextField
            id="outlined-basic"
            name="cpf"
            label="CPF"
            placeholder="000.000.000-00"
            variant="outlined"
            value={form.cpf}
            onChange={onChangeForm}
            type="text"
            required
          />
          <StyledTextField
            id="outlined-basic"
            name="password"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            variant="outlined"
            value={form.password}
            onChange={onChangeForm}
            type="password"
            required
          />
          <StyledTextField
            id="outlined-basic"
            name="password"
            label="Confirmar"
            placeholder="Confirme a senha anterior"
            variant="outlined"
            value={form.password}
            onChange={onChangeForm}
            type="password"
            required
          />
          <StyledButton
            onClickCapture={() => goToAddressPage(navigate)}
            textPrimary={"primary"}
            color={"primary"}
            fullWidth
            variant="contained"
          >
            Criar
          </StyledButton>
        </form>
      </Container>
    </div>
  )
}

export default SingUpPage
