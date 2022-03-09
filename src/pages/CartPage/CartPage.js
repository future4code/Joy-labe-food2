import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import ProductCard from "../../components/ProductCard/ProductCard";
import { BASE_URL } from "../../constants/urls";
import { GlobalState } from "../../GlobalState/GlobalState";
import useForm from "../../hooks/useForm";
import useRequestData from "../../hooks/useRequestData";
import { AddressTitle } from "../ProfilePage/styled";
import {
  AdressContainer,
  CartDetails,
  CartEmpty,
  Container,
  Path,
  StyledButton,
} from "./styled";

const CartPage = () => {
  const { cart } = useContext(GlobalState);
  const { data, isLoading } = useRequestData({}, "/profile");
  const {form,onChangeForm}=useForm({
    paymentMethod:''
  })
console.log(cart);
  const [renderCart, setRenderCart] = useState([]);

  const renderCartFun = () => {
    setRenderCart(JSON.parse(localStorage.getItem("cart")));
  };

  const placeOrder=()=>{
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      }
    }
    axios.post(`${BASE_URL}/restaurants/`)
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartFun();
  }, [cart]);
  console.log(cart);
  return (
    <Container>
      {isLoading && <Loading />}
      <Header />
      <AdressContainer>
        <AddressTitle>Endereço de entrega</AddressTitle>
        <p>{data?.user?.address}</p>
      </AdressContainer>
      <CartDetails>
        {cart.length === 0 && <CartEmpty>Carrinho Vazio</CartEmpty>}
        {renderCart?.map((item) => {
          return <ProductCard product={item} />;
        })}
        <p>Frete R$</p>
        <p>SUBTOTAL</p>
        <p>Forma de Pagamento</p>
        <Path></Path>
        <form onSubmit={placeOrder}>
        <input type="radio" value={"dinheiro"} required onChange={onChangeForm} id="money" name="paymentMethod" />
        <label for="dinheiro">Dinheiro</label>
        <br /><br />
        <input type="radio" value={"credito"} required onChange={onChangeForm} id="credit" name="paymentMethod" />
        <label for="credito">Cartão de Crédito</label>
        <StyledButton
          textPrimary={"primary"}
          color={"primary"}
          fullWidth
          variant="contained"
          type="submit"
          margin={"normal"}
         
        >
          Confirmar
        </StyledButton>
        </form>
      </CartDetails>

      <Footer />
    </Container>
  );
};

export default CartPage;
