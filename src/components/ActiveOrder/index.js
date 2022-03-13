import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState/GlobalState";
import { clock } from "../../assets/images/clock.png";
import { ContainerActiveOrder } from "./style";
export const ActiveOrder = () => {
  const { activeOrder, getActiveOrder } = useContext(GlobalState);
  getActiveOrder();
  return (
    <div>
      {activeOrder.order && (
        <ContainerActiveOrder>
          <img src={clock} alt="relógio" />
          <div>
            <p id={"title"}>Pedido em andamento</p>
            <p>{activeOrder.order.restaurantName}</p>
            <p id={"price"}>
              SUBTOTAL: R${activeOrder.order.totalPrice.toFixed(2)}
            </p>
          </div>
        </ContainerActiveOrder>
      )}
    </div>
  );
};
