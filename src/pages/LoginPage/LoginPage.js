import React from "react"
import axios from "axios"
import useForm from "../../hooks/useForm"
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledButtonSignUp,
} from "./styled"
import logo from "../../assets/images/logo-future-eats-red.png"
import { goToHomePage, goToSingUpPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import { Input } from "../../components/Input"
import { ErrorMessage } from "../../components/ErrorMessage"

const LoginPage = () => {
  useProtectedPage()
  const { form, onChangeForm, errors, span,setSpan, clearFields } = useForm({
    email: "",
    password: "",
  })

  const handleLogin = (e) => {
    e.preventDefault()
    const body = form

    axios
      .post(`${BASE_URL}/login`, body)
      .then(({ data }) => {
        localStorage.setItem("token", data.token)
        goToHomePage(navigate)
      })
      .catch((error) => {
        setSpan(error.response.data.message)
      })
      .finally(clearFields)
  }

  const navigate = useNavigate()

  return (
    <Container>
      <img src={logo} alt="logo red" />
      <h1>Entrar</h1>
      <form onSubmit={handleLogin}>
        <StyledTextField
          id="outlined-basic"
          type="email"
          placeholder="email@email.com"
          required
          autoComplete
          label="E-mail"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={onChangeForm}
        />
       <Input
            id="outlined-basic"
            name="password"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            value={form.password}
            onChange={onChangeForm}
            type="password"
            password={true}
            error={errors.password}
          />
        <StyledButton
          textPrimary={"primary"}
          color={"primary"}
          fullWidth
          variant="contained"
        >
          Entrar
        </StyledButton>
        <ErrorMessage errorMsg={span} />
        <StyledButtonSignUp onClick={() => goToSingUpPage(navigate)}>
          Não possui cadastro? Clique aqui.
        </StyledButtonSignUp>
      </form>
    </Container>
  )
}

export default LoginPage
