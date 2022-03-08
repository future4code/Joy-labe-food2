import React from "react";
import FormEditProfile from "../../components/FormEditProfile";
import { Header } from "../../components/Header";
import { Container } from "../../components/FormEditProfile/styled";
import useRequestData from "../../hooks/useRequestData";

const EditProfilePage = () => {
  const { data } = useRequestData({}, "/profile");

  return (
    <div>
      <Header />
      <Container>
        {data.user && <FormEditProfile dataProfile={data} />}
      </Container>
    </div>
  );
};

export default EditProfilePage;
