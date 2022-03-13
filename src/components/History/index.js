import React from "react";
import { Date, Historic, Restaurant, Subtotal } from "./style";

 const Histo = ({nome,data,total}) => {
  return (
    <Historic>
      <Restaurant>{nome}</Restaurant>
	<Date>{data}</Date>
	<Subtotal>SUBTOTAL R$ {total}</Subtotal>
    </Historic>
  );
};
export default Histo