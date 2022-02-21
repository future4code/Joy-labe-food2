import React from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import ProductCard from "../../components/ProductCard/ProductCard"
import { RestaurantCardDetails } from "../../components/RestaurantCardDetails"

import useRequestData from "../../hooks/useRequestData"
import { ContainerProductCategory, ContainerRestaurantsDetails } from "./styled"
const RestaurantPage = () => {
  const param = useParams()
  const { data } = useRequestData({}, `/restaurants/${param.id}`)

  const renderProducts = (category) => {
    return data.restaurant?.products.map((product) => {
      if (product.category === category) {
        return <ProductCard key={product.id} product={product} />
      }
    })
  }

  const categoriesList = data.restaurant?.products.map((product) => {
    return product.category
  })

  const products = [...new Set(categoriesList)].map((category) => {
    return (
      <ContainerProductCategory key={category}>
        <h2>{category}</h2>
        {renderProducts(category)}
      </ContainerProductCategory>
    )
  })

  console.log(data)

  return (
    <div>
      <Header />
      <ContainerRestaurantsDetails>
        <RestaurantCardDetails
          logoUrl={data?.restaurant?.logoUrl}
          name={data?.restaurant?.name}
          category={data?.restaurant?.category}
          deliveryTime={data?.restaurant?.deliveryTime}
          shipping={data?.restaurant?.shipping}
          address={data?.restaurant?.address}
        />
      </ContainerRestaurantsDetails>
      {products}
    </div>
  )
}

export default RestaurantPage
