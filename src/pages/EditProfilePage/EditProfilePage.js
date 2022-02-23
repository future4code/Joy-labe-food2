import axios from "axios"
import React from "react"
import Footer from "../../components/Footer"
import { Header } from "../../components/Header"
import { BASE_URL } from "../../constants/urls"
import useForm from "../../hooks/useForm"
import { Container, StyledButton, StyledTextField } from "./styled"

const EditProfilePage = () => {

  const { form, onChangeForm, clearFields } = useForm({
    name:'',
    email: '',
    cpf: ''
  })



  const editProfile=(e)=>{
    e.preventDefault()
    const body=form
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      }
    }
    axios.put(`${BASE_URL}/profile`,body,headers)
    .then((res)=>{
      alert("Usuário atualizado")
    }).catch((err)=>{
      console.log(err.response.data.message);
    })
    console.log(body);
    clearFields();
  }

  return (
    <div>
      <Header/>
      <Container>
      <form onSubmit={editProfile} method="PUT">

      <StyledTextField
          id="outlined-basic"
          type="text"
          placeholder="Nome"
          required
          autoComplete
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
          autoComplete
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
          autoComplete
          label="CPF"
          variant="outlined"
          name="cpf"
          value={form.cpf}
          onChange={onChangeForm}
        />
        <StyledButton
          textPrimary={'primary'}
          color={'primary'}
          fullWidth
          variant="contained"
          type="submit"
        >
          Salvar
        </StyledButton>
      </form>
      </Container>
     
    </div>
  )
}

export default EditProfilePage
