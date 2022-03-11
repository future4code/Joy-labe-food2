import React from "react"
import Footer from "../../components/Footer"
import { Header } from "../../components/Header"
import useRequestData from "../../hooks/useRequestData"
import Edit from "../../assets/images/edit.png"

import {
  AddressDiv,
  AddressTitle,
  ButtonStyled,
  Container,
  CPF,
  DatesDiv,
  Email,
  History,
  HistoryDiv,
  HistoryTitle,
  Img,
  Path,
  ProfileDetails,
  StyledButton,
  UserName,
} from "./styled"
import { useNavigate } from "react-router-dom"
import {
  goToEditProfilePage,
  goToEditAdressPage,
} from "../../routes/coordinator"
import { Loading } from "../../components/Loading"
import  Histo  from "../../components/History"


const ProfilePage = () => {
  const { data, isLoading } = useRequestData({}, "/profile")
  const { dataHistory } = useRequestData({}, "/orders/history")
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Container>
      <Header />
      {isLoading ? <Loading/> : 
      <ProfileDetails>
      <DatesDiv>
      <UserName>{data?.user?.name}</UserName>
      <Img src={Edit} onClick={()=>goToEditProfilePage(navigate)}/>
      </DatesDiv>
      <Email>{data?.user?.email}</Email><br/>
      <CPF>{data?.user?.cpf}</CPF>

      <AddressDiv>
        <AddressTitle>Endereço Cadastrado</AddressTitle>
        <Img src={Edit} onClick={()=>goToEditAdressPage(navigate)}/>
        <p>{data?.user?.address}</p>
       
      </AddressDiv>
      
      <div>
        <HistoryTitle>Histórico de Pedidos</HistoryTitle>
        <Path></Path>
        <HistoryDiv>
          <History>
            {dataHistory ? "Histórico" : "Você não realizou nenhum pedido"}
          </History>
         
        </HistoryDiv>
        <Histo/>
      </div>
    </ProfileDetails>
   }
<ButtonStyled>
  <></>
   <StyledButton
   
   textPrimary={"primary"}
   color={"primary"}
   fullWidth
   variant="contained"
   type="submit"
   margin={"normal"}
   onClick={logout}>Logout</StyledButton>
   </ButtonStyled>
   <></>   
      <Footer />
    </Container>
  )
}

export default ProfilePage
