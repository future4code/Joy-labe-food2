import React from "react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import useRequestData from "../../hooks/useRequestData";
import {
  AddressDiv,
  AddressTitle,
  CPF,
  Email,
  History,
  HistoryDiv,
  HistoryTitle,
  Path,
  ProfileDetails,
  UserName,
} from "./styled";

const ProfilePage = () => {
  const { data } = useRequestData({}, "/profile");
  const { dataHistory } = useRequestData({}, "/orders/history");

  return (
    <div>
      <Header />
      <ProfileDetails>
        <UserName>{data?.user?.name}</UserName>
        <Email>{data?.user?.email}</Email>
        <CPF>{data?.user?.cpf}</CPF>

        <AddressDiv>
          <AddressTitle>Endereço Cadastrado</AddressTitle>
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
        </div>
      </ProfileDetails>
      <Footer />
    </div>
  );
};

export default ProfilePage;
