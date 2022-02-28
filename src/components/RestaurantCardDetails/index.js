import React from "react";
import {
	Address,
  Category,
  Container,
  ContainerDetails,
  ContainerNumb,
  Img,
  Name
} from "./styled";

export const RestaurantCardDetails = ({
  logoUrl,
  name,
  category,
  deliveryTime,
  shipping,
  address,
}) => {
  return (
    <div>
      {" "}
      <ContainerDetails>
        <Img src={logoUrl} alt="Logo Restaurante" />
        <Container>
          <Name>{name}</Name>
          <Category>{category}</Category>
          <ContainerNumb>
       
              <p>
                {Math.floor(deliveryTime * 0.9)} - {deliveryTime} min
              </p>
	      <p>
              Frete R$
              {Number(shipping).toFixed(2)}
	      </p>
          </ContainerNumb>
          <Address>{address}</Address>
        </Container>
      </ContainerDetails>
    </div>
  );
};
