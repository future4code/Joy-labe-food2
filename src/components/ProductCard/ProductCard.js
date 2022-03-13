import React, { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState/GlobalState"
import { ContainerDetails, ContainerProduct, QuantityContainer } from "./styled"

const ProductCard = ({ product, openModal }) => {
  const { cart, setCart } = useContext(GlobalState)
  const [onCart, setOnCart] = useState(0)

  const removeFromCart = (product) => {
    setCart(
      cart.filter((prod) => {
        return product.id !== prod.id
      })
    )
    localStorage.setItem("cart", JSON.stringify(cart))
    setOnCart(0)
  }

  useEffect(() => {
    cart.map((prod) => {
      if (prod.id === product.id) return setOnCart(prod.quantity)
      else return false
    })
  }, [cart, product.id])

  return (
    <ContainerProduct>
      <img src={product.photoUrl} alt="Imagem do produto" />
      <ContainerDetails>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>R$ {Number(product.price).toFixed(2)}</span>
        {!onCart ? (
          <button onClick={() => openModal(product)}>adicionar</button>
        ) : (
          <button onClick={() => removeFromCart(product)}>remover</button>
        )}
        {onCart ? <QuantityContainer>{onCart}</QuantityContainer> : ""}
      </ContainerDetails>
    </ContainerProduct>
  )
}

export default ProductCard
