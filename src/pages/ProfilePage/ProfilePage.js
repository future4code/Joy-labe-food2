import React from 'react'
import Footer from '../../components/Footer'
import { Header } from '../../components/Header'
import useRequestData from '../../hooks/useRequestData'
import Edit from '../../assets/images/edit.png'
import {
  AddressDiv,
  AddressTitle,
  CPF,
  DatesDiv,
  Email,
  History,
  HistoryContainer,
  HistoryDiv,
  HistoryTitle,
  Img,
  Path,
  ProfileDetails,
  UserName
} from './styled'
import { useNavigate } from 'react-router-dom'
import {
  goToEditProfilePage,
  goToEditAdressPage
} from '../../routes/coordinator'

const ProfilePage = () => {
  const { data } = useRequestData({}, '/profile')
  const { dataHistory } = useRequestData({}, '/orders/history')
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <ProfileDetails>
        <DatesDiv>
          <UserName>{data?.user?.name}</UserName>
          <Img src={Edit} onClick={() => goToEditProfilePage(navigate)} />
        </DatesDiv>
        <Email>{data?.user?.email}</Email>
        <br />
        <CPF>{data?.user?.cpf}</CPF>

        <AddressDiv>
          <div>
            <AddressTitle>Endereço Cadastrado</AddressTitle>
            <Img src={Edit} onClick={() => goToEditAdressPage(navigate)} />
          </div>
          <p>{data?.user?.address}</p>
        </AddressDiv>

        <HistoryContainer>
          <HistoryTitle>Histórico de Pedidos</HistoryTitle>
          <Path></Path>
          <HistoryDiv>
            <History>
              {dataHistory ? 'Histórico' : 'Você não realizou nenhum pedido'}
            </History>
          </HistoryDiv>
        </HistoryContainer>
      </ProfileDetails>
      <Footer />
    </div>
  )
}

export default ProfilePage
