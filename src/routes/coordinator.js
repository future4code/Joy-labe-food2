export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToSingUpPage = (navigate) => {
    navigate("/cadastro")
}

export const goToAdressPage = (navigate) => {
    navigate("/endereco")
}

export const goToHomePage = (navigate) => {
    navigate("/pagina-inicial")
}

export const goRestaurantPage = (navigate, id) => {
    navigate(`/restaurante/${id}`)
}

export const goToCartPage = (navigate) => {
    navigate("/carrinho")
}

export const goToProfilePage = (navigate) => {
    navigate("/perfil")
}

export const goToEditProfilePage = (navigate) => {
    navigate("/perfil/editar")
}

export const goToEditAdressPage = (navigate) => {
    navigate("/perfil/editar-endereco")
}