import React from 'react'
import axios from 'axios'
import useForm from '../../hooks/useForm'
// import { Button } from '@mui/material'
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledButtonSignUp
} from './styled'
import logo from '../../assets/images/logo-future-eats-red.png'
import { goToHomePage, goToSingUpPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'

const LoginPage = () => {
  const { form, onChangeForm, clearFields } = useForm({
    email: '',
    password: ''
  })

  const handleLogin = e => {
    e.preventDefault()
    const body = form

    axios
      .post(`${BASE_URL}/login`, body)
      .then(({ data }) => {
        localStorage.setItem(data.token, 'token')
        goToHomePage(navigate)
      })
      .catch(error => {
        console.log(error.response.data.message)
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
          label="E-mail"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={onChangeForm}
        />
        <StyledTextField
          id="outlined-basic"
          type="password"
          placeholder="Mínimo 6 caracteres"
          required
          label="Senha"
          variant="outlined"
          name="password"
          value={form.password}
          onChange={onChangeForm}
        />
        <StyledButton
          textPrimary={'primary'}
          color={'primary'}
          fullWidth
          variant="contained"
        >
          Entrar
        </StyledButton>
        <StyledButtonSignUp onClick={() => goToSingUpPage(navigate)}>
          Não possui cadastro? Clique aqui.
        </StyledButtonSignUp>
      </form>
    </Container>
  )
}

export default LoginPage
