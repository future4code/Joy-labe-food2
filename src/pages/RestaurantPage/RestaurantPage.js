import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { RestaurantCardDetails } from "../../components/RestaurantCardDetails";

import useRequestData from "../../hooks/useRequestData";
import { ContainerRestaurantsDetails } from "./styled";
const RestaurantPage = () => {
  const param = useParams();
  const { data } = useRequestData({}, `/restaurants/${param.id}`);

  console.log(data);

  return (
    <div>
      <Header />
      <ContainerRestaurantsDetails>
        <RestaurantCardDetails
          logoUrl={data?.restaurant?.logoUrl}
          name={data?.restaurant?.name}
          category={data?.restaurant?.category}
          deliveryTime={data?.restaurant?.deliveryTime}
          shipping={data?.restaurant?.shipping}
          address={data?.restaurant?.address}
        />
      </ContainerRestaurantsDetails>
    </div>
  );
};

export default RestaurantPage;
