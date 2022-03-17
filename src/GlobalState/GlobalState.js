import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../constants/urls";

export const GlobalState = createContext();

export const GlobalStorage = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );
  const [dataRestaurant, setDataRestaurant] = useState(
    JSON.parse(localStorage.getItem("restaurant"))
      ? JSON.parse(localStorage.getItem("restaurant"))
      : {}
  );
  const [activeOrder, setActiveOrder] = useState({});

  const getActiveOrder = () => {
    axios
      .get(`${BASE_URL}/active-order`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setActiveOrder(res.data);
      })
      .catch((err) => {
        window.alert("Erro ao realizar solicitação.\n Tente novamente.");
      });
  };

  return (
    <GlobalState.Provider
      value={{
        cart,
        setCart,
        dataRestaurant,
        setDataRestaurant,
        activeOrder,
        getActiveOrder,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
