import React from "react"
import { useNavigate } from "react-router-dom"
import back from "../../assets/images/back.png"
import { ContainerHeader } from "./styled"
export const Header = () => {
  const navigate = useNavigate()

  const page = () => {
    if (window.location.pathname === "/cadastro") {
      return ""
    } else if (window.location.pathname === "/endereco") {
      return ""
    } else if (window.location.pathname === "/pagina-inicial") {
      return "Ifuture"
    }
    if (window.location.pathname.includes("/restaurante/")) {
      return "Restaurante"
    } else if (window.location.pathname === "/perfil") {
      return "Meu Perfil"
    } else if (window.location.pathname === "/perfil/editar") {
      return "Editar"
    } else if (window.location.pathname === "/perfil/editar-endereco") {
      return "Endereço"
    } else if (window.location.pathname === "/carrinho") {
      return "Meu Carrinho"
    }
  }
  return (
    <ContainerHeader>
      {window.location.pathname === "/endereco" ||
      window.location.pathname === "/perfil/editar-endereco" ||
      window.location.pathname.includes("/restaurante/") ||
      window.location.pathname === "/cadastro" ||
      window.location.pathname === "/perfil/editar" ||
      window.location.pathname.includes("/restaurante/") ? (
        <img src={back} alt="Voltar" onClick={() => navigate(-1)} />
      ) : (
        <div></div>
      )}
      {window.location.pathname === "" || window.location.pathname === "/" ? (
        <p></p>
      ) : (
        <p>{page()}</p>
      )}
      <div></div>
    </ContainerHeader>
  )
}
