import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLoginPage } from "../routes/coordinator"

const useProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      goToHomePage(navigate)
    } else {
      goToLoginPage(navigate)
    }
  }, [navigate])

  return
}

export default useProtectedPage
