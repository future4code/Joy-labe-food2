import React, { useState } from "react"
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
  const [selectedCategory, setSelectedCategory] = useState({
    active: false,
    category: "",
  })

  const handleSelectCategory = (category) => {
    if (selectedCategory.category === category && selectedCategory.active) {
      setSelectedCategory({ active: false, category: "" })
    } else {
      setSelectedCategory({ active: true, category: category })
    }
  }

  const filterByCategory = () => {
    const filters = data.restaurants?.filter((restaurant) => {
      if (restaurant.category === selectedCategory.category) return true
    })

    return filters.map((restaurant) => {
      return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    })
  }

  const categoriesList = data.restaurants
    ?.map((restaurant) => {
      return restaurant.category
    })
    .sort((a, b) => {
      return a.localeCompare(b)
    })

  const categories = [...new Set(categoriesList)].map((category) => {
    return (
      <CategoryWrapper
        onClick={() => {
          handleSelectCategory(category)
        }}
        key={category}
        color={category === selectedCategory.category ? "primary" : "neutral"}
      >
        <span>{category}</span>
      </CategoryWrapper>
    )
  })

  const restaurantsList = data.restaurants?.map((restaurant) => {
    return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
  })

  return (
    <Container>
      <Header />
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
          ),
        }}
      />
      <ContainerCatetories>{categories}</ContainerCatetories>
      {selectedCategory.category !== "" ? filterByCategory() : restaurantsList}
      <Footer />
    </Container>
  )
}

export default HomePage
