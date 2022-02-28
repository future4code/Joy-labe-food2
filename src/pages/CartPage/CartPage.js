import React, { useContext, useEffect, useState } from "react"
import Footer from "../../components/Footer"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import ProductCard from "../../components/ProductCard/ProductCard"
import { GlobalState } from "../../GlobalState/GlobalState"
import useRequestData from "../../hooks/useRequestData"
import { AddressTitle } from "../ProfilePage/styled"
import { AdressContainer, CartEmpty, Container } from "./styled"

const CartPage = () => {
  const { cart } = useContext(GlobalState)
  const { data, isLoading } = useRequestData({}, "/profile")
  const [renderCart, setRenderCart] = useState([])

  const renderCartFun = () => {
    setRenderCart(JSON.parse(localStorage.getItem("cart")))
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    renderCartFun()
  }, [cart])
console.log(cart);
  return (
    <Container>
      {isLoading && <Loading/>}
      <Header />
      <AdressContainer>
        <AddressTitle>Endereço de entrega</AddressTitle>
        <p>{data?.user?.address}</p>
      </AdressContainer>
      {cart.length === 0 && <CartEmpty>Carrinho Vazio</CartEmpty>} 
      {renderCart?.map((item) => {
        return <ProductCard product={item} />
      })}
      
      <Footer />
    </Container>
  )
}

export default CartPage
