import React from "react"
import {
  ContainerDetails,
  ContainerProduct,
  QuantityContainer,
  QuantityText,
} from "./styled"

const ProductCard = ({ product }) => {
  console.log(product)
  return (
    <ContainerProduct>
      <img src={product.photoUrl} alt="Imagem do produto" />
      <ContainerDetails>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>R${Number(product.price).toFixed(2)}</span>
        <button>adicionar</button>
        <QuantityContainer>2</QuantityContainer>
      </ContainerDetails>
    </ContainerProduct>
  )
}

export default ProductCard
