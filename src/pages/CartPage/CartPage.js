import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import ProductCard from "../../components/ProductCard/ProductCard";
import { BASE_URL } from "../../constants/urls";
import { GlobalState } from "../../GlobalState/GlobalState";
import useForm from "../../hooks/useForm";
import useRequestData from "../../hooks/useRequestData";
import { goToHomePage } from "../../routes/coordinator";
import { AddressTitle } from "../ProfilePage/styled";
import {
  AdressContainer,
  CartDetails,
  CartEmpty,
  Container,
  Path,
  RestaurantDetails,
  StyledButton,
} from "./styled";

const CartPage = () => {
  const { cart, dataRestaurant, total, setTotal, getActiveOrder } = useContext(GlobalState);
  const { data, isLoading } = useRequestData({}, "/profile");
  const navigate=useNavigate()
  const { form, onChangeForm } = useForm({
    paymentMethod: "",
  });

  const [renderCart, setRenderCart] = useState([]);

  const renderCartFun = () => {
    setRenderCart(JSON.parse(localStorage.getItem("cart")));
  };

  const placeOrder = (e) => {
    e.preventDefault();
    const body = {
      products: cart.map((iten) => {
        return {
          id: iten.id,
          quantity: iten.quantity,
        };
      }),
      paymentMethod: form.paymentMethod,
    };
    const config = {
      method: 'post',
      url: BASE_URL + `/restaurants/${dataRestaurant.id}/order`,
      headers: { 'auth': localStorage.getItem('token') },
      data: body,
  }
    axios(config)
      .then(({data}) => {
        alert("pedido feito");
        getActiveOrder()
        return data
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
      goToHomePage(navigate)
  };
  const calculaTotal = () => {
    const preco = cart
      .map((item) => {
        return item.price * item.quantity;
      })
      .reduce((a, b) => a + b, 0);

    setTotal(preco + dataRestaurant.shipping);
    return preco + dataRestaurant.shipping;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartFun();
    calculaTotal();
  }, [cart]);

  return (
    <Container>
      {isLoading && <Loading />}
      <Header />
      <AdressContainer>
        <AddressTitle>Endereço de entrega</AddressTitle>
        <p>{data?.user?.address}</p>
      </AdressContainer>
     {cart.length > 0 ? <RestaurantDetails>
        <h3>{dataRestaurant.name}</h3>
        <p>{dataRestaurant.address}</p>
        <p>
          {" "}
          {Math.floor(dataRestaurant.deliveryTime * 0.9)} -{" "}
          {dataRestaurant.deliveryTime} min
        </p>
      </RestaurantDetails> : <></>} 
      <CartDetails>
        {cart.length === 0 && <CartEmpty>Carrinho Vazio</CartEmpty>}
        {renderCart?.map((item) => {
          return <ProductCard product={item} />;
        })}
        <p>Frete R$ {dataRestaurant?.shipping},00</p>
        <p>SUBTOTAL R$ {total},00</p>
        <p>Forma de Pagamento</p>
        <Path></Path>
        <form onSubmit={placeOrder}>
          <input
            type="radio"
            value={"money"}
            required
            onChange={onChangeForm}
            id="money"
            name="paymentMethod"
          />
          <label for="dinheiro">Dinheiro</label>
          <br />
          <br />
          <input
            type="radio"
            value={"creditcard"}
            required
            onChange={onChangeForm}
            id="credit"
            name="paymentMethod"
          />
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
