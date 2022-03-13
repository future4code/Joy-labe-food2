/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useContext, useState } from "react"
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
import { Loading } from "../../components/Loading"
import { GlobalState } from "../../GlobalState/GlobalState"
import { ActiveOrder } from "../../components/ActiveOrder"

const HomePage = () => {
  const { data, isLoading } = useRequestData({}, "/restaurants")
  const { getActiveOrder } = useContext(GlobalState)

  const [selectedCategory, setSelectedCategory] = useState({
    active: false,
    category: "",
  })
  const [searchBar, setSearchBar] = useState("")

  const handleSearch = ({ target }) => {
    setSearchBar(target.value)
  }

  const handleSelectCategory = (category) => {
    if (selectedCategory.category === category && selectedCategory.active) {
      setSelectedCategory({ active: false, category: "" })
    } else {
      setSelectedCategory({ active: true, category: category })
    }
  }

  const filterByCategory = () => {
    const filters = data?.restaurants?.filter((restaurant) => {
      if (restaurant.category === selectedCategory.category) return true
    })

    return filters.map((restaurant) => {
      return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    })
  }

  const categoriesList = data?.restaurants
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

  const restaurantsList = data?.restaurants?.map((restaurant) => {
    return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
  })

  const filterBySearch = () => {
    const searchedRestaurants = restaurantsList?.filter(({ props }) => {
      return props.restaurant.name
        ?.toLowerCase()
        .includes(searchBar.toLowerCase())
    })

    if (searchedRestaurants.length) {
      return searchedRestaurants
    } else {
      return <span> Não encontramos 🙁 </span>
    }
  }

  return (
    <div>
      <Container>
        <Header />
        {isLoading && <Loading />}
        <StyledTextField
          alue={searchBar}
          onChange={handleSearch}
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
        {selectedCategory.category !== ""
          ? filterByCategory()
          : searchBar !== ""
          ? filterBySearch()
          : restaurantsList}
        <Footer />
      </Container>
      {getActiveOrder ? <ActiveOrder /> : ""}
    </div>
  )
}

export default HomePage
