import React, { useContext, useEffect } from "react"
import Footer from "../../components/Footer"
import { Header } from "../../components/Header"
import { Container } from "../../components/RestaurantCardDetails/styled"
import { GlobalState } from "../../GlobalState/GlobalState"

const CartPage = () => {
  const { cart } = useContext(GlobalState)

  const renderCart = () => {
    const renderCart1 = JSON.parse(localStorage.getItem("cart")).map((item) => {
      return item
    })
    return renderCart1
  }

  useEffect(() => {
    renderCart()
  }, [cart])

  return (
    <div>
      <Header />
      {renderCart().map((item) => {
        return (
          <Container>
            <h1>{item.name}</h1>
            <p>{item.quantity}</p>
          </Container>
        )
      })}
      <Footer />
    </div>
  )
}

export default CartPage
