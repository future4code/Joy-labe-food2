import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import InitialPage from "../pages/InitialPage/InitialPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SingUpPage from "../pages/SingUpPage/SingUpPage"
import AddressPage from "../pages/AddressPage/"
import HomePage from "../pages/HomePage/HomePage"
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage"
import CartPage from "../pages/CartPage/CartPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage"

import { GlobalStorage } from "../GlobalState/GlobalState"
import EditAdressPage from "../pages/EditAdressPage/EditAdressPage"

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<SingUpPage />} />
          <Route path="/endereco" element={<AddressPage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/perfil/editar" element={<EditProfilePage />} />
          <Route path="/perfil/editar-endereco" element={<EditAdressPage />} />
          <Route path="/pagina-inicial" element={<HomePage />} />
          <Route path="/restaurante/:id" element={<RestaurantPage />} />
          <Route path="/carrinho" element={<CartPage />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  )
}

export default AppRoutes
