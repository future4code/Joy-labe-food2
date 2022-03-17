import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import ProductCard from "../../components/ProductCard/ProductCard"
import { BASE_URL } from "../../constants/urls"
import { GlobalState } from "../../GlobalState/GlobalState"
import useForm from "../../hooks/useForm"
import useRequestData from "../../hooks/useRequestData"
import { goToHomePage } from "../../routes/coordinator"
import { AddressTitle } from "../ProfilePage/styled"
import {
  AdressContainer,
  CartDetails,
  CartEmpty,
  Container,
  Frete,
  Input,
  Path,
  Price,
  RestaurantDetails,
  StyledButton,
  SubTotal,
  Total,
  TotalPrice,
} from "./styled"

const CartPage = () => {
  const { cart, dataRestaurant} = useContext(GlobalState)
  const { data, isLoading } = useRequestData({}, "/profile")
  const navigate = useNavigate()
  const { form, onChangeForm } = useForm({
    paymentMethod: "",
  })

  const [renderCart, setRenderCart] = useState([])

  const renderCartFun = () => {
    setRenderCart(JSON.parse(localStorage.getItem("cart")))
  }

  const placeOrder = (e) => {
    e.preventDefault()
    const body = {
      products: cart.map((iten) => {
        return {
          id: iten.id,
          quantity: iten.quantity,
        }
      }),
      paymentMethod: form.paymentMethod,
    }
    const config = {
      method: "post",
      url: BASE_URL + `/restaurants/${dataRestaurant.id}/order`,
      headers: { auth: localStorage.getItem("token") },
      data: body,
    }
    axios(config)
      .then(({ data }) => {
        alert("pedido feito")
        return data
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
    goToHomePage(navigate)
  }
  const valor = cart.map((c) => {
    return c.quantity * c.price
  })
  let soma = 0.0
  for (let i = 0; i < valor.length; i++) {
    soma = soma + valor[i]
  }
  let somaWithFrete = soma + dataRestaurant?.shipping

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    renderCartFun()
  }, [cart])

  return (
    <Container>
      {isLoading && <Loading />}
      <Header />
      <AdressContainer>
        <AddressTitle>Endereço de entrega</AddressTitle>
        <p>{data?.user?.address}</p>
      </AdressContainer>
      {cart.length > 0 ? (
        <RestaurantDetails>
          <h3>{dataRestaurant.name}</h3>
          <p>{dataRestaurant.address}</p>
          <p>
            {" "}
            {Math.floor(dataRestaurant.deliveryTime * 0.9)} -{" "}
            {dataRestaurant.deliveryTime} min
          </p>
        </RestaurantDetails>
      ) : (
        <></>
      )}
      <CartDetails>
        {cart.length === 0 && <CartEmpty>Carrinho Vazio</CartEmpty>}
        {renderCart?.map((item) => {
          return <ProductCard product={item} key={item.id} />
        })}
        <Price>
          <Frete>
            Frete R$ {" "}
            {cart.length > 0 ? dataRestaurant.shipping.toFixed(2) : "0,00"}
          </Frete>
          <TotalPrice>
            <SubTotal>SUBTOTAL</SubTotal>
            <Total> R$ {soma === 0 ? soma : somaWithFrete.toFixed(2)}</Total>
          </TotalPrice>
        </Price>
        <p>Forma de Pagamento</p>
        <Path></Path>
        <form onSubmit={placeOrder}>
          <Input
            type="radio"
            value={"money"}
            required
            onChange={onChangeForm}
            id="money"
            name="paymentMethod"
          />
          <label htmlFor="dinheiro">Dinheiro</label>
          <br />
          <br />
          <Input
            type="radio"
            value={"creditcard"}
            required
            onChange={onChangeForm}
            id="credit"
            name="paymentMethod"
          />
          <label htmlFor="credito">Cartão de Crédito</label>
          <StyledButton
            textPrimary={"secondary"}
            color={"primary"}
            fullWidth
            variant="contained"
            type="submit"
            margin={"normal"}
            desabilitado={cart.length <= 0}
          >
            Confirmar
          </StyledButton>
        </form>
      </CartDetails>
      <Footer />
    </Container>
  )
}

export default CartPage
