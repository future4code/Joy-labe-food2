import React, { useContext, useEffect, useState } from "react"
import Footer from "../../components/Footer"
import { Header } from "../../components/Header"
import ProductCard from "../../components/ProductCard/ProductCard"
import { GlobalState } from "../../GlobalState/GlobalState"
import { Container } from "./styled"

const CartPage = () => {
  const { cart } = useContext(GlobalState)
  const [renderCart, setRenderCart] = useState([])

  const renderCartFun = () => {
    setRenderCart(JSON.parse(localStorage.getItem("cart")))
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    renderCartFun()
  }, [cart])

  return (
    <div>
      <Header />
      <Container>
        {renderCart?.map((item) => {
          return <ProductCard product={item} />
        })}
      </Container>
      <Footer />
    </div>
  )
}

export default CartPage
