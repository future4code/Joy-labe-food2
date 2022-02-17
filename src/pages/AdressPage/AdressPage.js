import React from "react"
import { Header } from "../../components/Header"
import { Container, StyledTextField, StyledButton} from './styled'
import useForm from '../../hooks/useForm'
import logo from '../../assets/images/logo-future-eats-red.png'

const AdressPage = () => {

    const { form, onChangeForm, clearFields } = useForm({
      street: '',
      number: '',
      complement:'',
      neighbourhood: '',
      city:'',
      state:''
    })
  

  return (
    <Container>
      {/* <Header/> */}
      <img src={logo} alt="logo red" />
      <h1>Cadastrar</h1>
      <form>
        <StyledTextField
          id="outlined-basic"
          name="street"
          label="Logradouro"
          placeholder="Rua / Av."
          variant="outlined"
          value={form.street}
          onChange={onChangeForm}
          type="text"
          required
        />
        <StyledTextField
          id="outlined-basic"
          name="number"
          label="Número"
          placeholder="Número"
          variant="outlined"
          value={form.number}
          onChange={onChangeForm}
          type="text"
          required
        />
        <StyledTextField
          id="outlined-basic"
          name="complement"
          label="Complemento"
          placeholder="Apto./Bloco"
          variant="outlined"
          value={form.complement}
          onChange={onChangeForm}
          type="text"
          required
        />
        <StyledTextField
          id="outlined-basic"
          name="neighbourhood"
          label="Bairro"
          placeholder="Bairro"
          variant="outlined"
          value={form.neighbourhood}
          onChange={onChangeForm}
          type="text"
          required
        />
        <StyledTextField
          id="outlined-basic"
          name="city"
          label="Cidade"
          placeholder="Cidade"
          variant="outlined"
          value={form.city}
          onChange={onChangeForm}
          type="text"
          required
        />
        <StyledTextField
          id="outlined-basic"
          name="state"
          label="Estado"
          placeholder="Estado"
          variant="outlined"
          value={form.state}
          onChange={onChangeForm}
          type="text"
          required
        />
        <StyledButton
          textPrimary={'primary'}
          color={'primary'}
          fullWidth
          variant="contained"
        >
          Salvar
        </StyledButton>
        </form>

      
    </Container>
  )
}

export default AdressPage
