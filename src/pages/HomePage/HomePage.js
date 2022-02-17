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
import { useNavigate, useParams } from "react-router-dom"
import { goRestaurantPage } from "../../routes/coordinator"

const HomePage = () => {
  const navigate = useNavigate()
  const { id } = useParams

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
            ),
          }}
        />
        <ContainerCatetories>
          <CategoryWrapper>
            <span>Burguer</span>
          </CategoryWrapper>
          <CategoryWrapper>
            <span>Oriental</span>
          </CategoryWrapper>
          <CategoryWrapper>
            <span>Massas</span>
          </CategoryWrapper>
          <CategoryWrapper>
            <span>Saudável</span>
          </CategoryWrapper>
        </ContainerCatetories>
        <RestaurantCard onClick={() => goRestaurantPage(navigate, id)} />
        <RestaurantCard onClick={() => goRestaurantPage(navigate, id)} />
       
        
      </Container>
      <Footer />
    </div>
  )
}

export default HomePage
