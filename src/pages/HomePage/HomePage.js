import React from "react"
import Footer from "../../components/Footer"
import { Header } from "../../components/Header"
import SearchIcon from "@mui/icons-material/Search"
import {
  CategoryWrapper,
  Container,
  ContainerCatetories,
  StyledTextField,
} from "./styled"
import { InputAdornment } from "@mui/material"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import useRequestData from "../../hooks/useRequestData"

const HomePage = () => {
  const { data } = useRequestData({}, "/restaurants")

  const categoriesList = data.restaurants
    ?.map((restaurant) => {
      return restaurant.category
    })
    .sort((a, b) => {
      return a.localeCompare(b)
    })

  const categories = [...new Set(categoriesList)].map((category) => {
    return (
      <CategoryWrapper key={category}>
        <span>{category}</span>
      </CategoryWrapper>
    )
  })

  const restaurantsList = data.restaurants?.map((restaurant) => {
    return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
  })

  return (
    <div>
      <Header />
      <Container>
        <StyledTextField
          id="outlined-search"
          type="search"
          placeholder="Restaurante"
          InputProps={{
            color: "text",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <ContainerCatetories>{categories}</ContainerCatetories>
        {restaurantsList}
      </Container>
      <Footer />
    </div>
  )
}

export default HomePage
