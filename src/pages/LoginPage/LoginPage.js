import React from 'react'
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
// import { Button } from '@mui/material'
import { Container, StyledTextField, StyledButton, StyledButtonSignUp } from './styled'
import logo from '../../assets/images/logo-future-eats-red.png'
import { goToSingUpPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { form, onChangeForm, clearFields } = useForm({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  return (
    <Container>
      <img src={logo} alt="logo red" />
      <h1>Entrar</h1>
      <form>
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
        <StyledButtonSignUp 
          onClick={()=> goToSingUpPage(navigate)} >
          Não possui cadastro? Clique aqui.
        </StyledButtonSignUp>
      </form>
    </Container>
  )
}

export default LoginPage
