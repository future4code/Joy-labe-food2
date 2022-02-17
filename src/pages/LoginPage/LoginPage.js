import React from 'react'
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
// import { Button } from '@mui/material'
import { Container, StyledTextField, StyledButton } from './styled'
import logo from '../../assets/images/logo-future-eats-red.png'

const LoginPage = () => {
  const { form, onChangeForm, clearFields } = useForm({
    email: '',
    password: ''
  })

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
        <p>Não possui cadastro? Clique aqui.</p>
      </form>
    </Container>
  )
}

export default LoginPage
