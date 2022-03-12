import React from "react";
import { Header } from "../../components/Header";
import { Container, StyledButton, StyledTextField } from "./styled";
import useForm from "../../hooks/useForm";
import logo from "../../assets/images/logo-future-eats-red.png";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../components/ErrorMessage";
import { signUp } from "../../services/user";
import { Input } from "../../components/Input";

const SingUpPage = () => {
  const { form, onChangeForm, errors, setErrors, span, setSpan } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const validate = () => {
    let temp = {};
    temp.password =
      form.password.length > 5
        ? ""
        : form.password === ""
        ? "Campo de preenchimento obrigatório"
        : "Mínimo de 6 caracteres";
    temp.confirmPassword =
      form.confirmPassword === ""
        ? "Campo de preenchimento obrigatório"
        : form.confirmPassword.length > 5
        ? form.confirmPassword === form.password
          ? ""
          : "Deve ser a mesma que a anterior."
        : "Mínimo de 6 caracteres";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };
  const onSignUp = (e) => {
    e.preventDefault();
    if (validate()) {
      signUp(form, navigate, setSpan);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <img src={logo} alt="logo red" />
        <h1>Cadastrar</h1>
        <form onSubmit={onSignUp} method="POST">
          <StyledTextField
            id="outlined-basic"
            name="name"
            label="Nome"
            variant="outlined"
            required
            placeholder="Nome e Sobrenome"
            value={form.name}
            onChange={onChangeForm}
            type="text"
          />

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
            name="cpf"
            label="CPF"
            variant="outlined"
            required
            placeholder="000.000.000-00"
            value={form.cpf}
            onChange={onChangeForm}
            type="text"
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
          <Input
            id="outlined-basic"
            name="confirmPassword"
            label="Confirmar"
            placeholder="Confirme a senha anterior"
            value={form.confirmPassword}
            onChange={onChangeForm}
            type="password"
            password={true}
            error={errors.confirmPassword}
          />
          <ErrorMessage errorMsg={span} />
          <StyledButton
            textPrimary={"primary"}
            color={"primary"}
            fullWidth
            variant="contained"
            type="submit"
            margin={"normal"}
          >
            Criar
          </StyledButton>
        </form>
      </Container>
    </div>
  );
};

export default SingUpPage;
