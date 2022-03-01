import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import ProductCard from "../../components/ProductCard/ProductCard"
import { RestaurantCardDetails } from "../../components/RestaurantCardDetails"
import { GlobalState } from "../../GlobalState/GlobalState"
import useRequestData from "../../hooks/useRequestData"
import {
  ContainerModal,
  ContainerProductCategory,
  ContainerRestaurantsDetails,
  ModalSelect,
  StyledButton,
} from "./styled"

const RestaurantPage = () => {
  const param = useParams()
  const { data, isLoading } = useRequestData({}, `/restaurants/${param.id}`)
  const [quantity, setQuantity] = useState(0)
  const [open, setOpen] = useState(false)
  const { cart, setCart } = useContext(GlobalState)
  const [prod, setProd] = useState({})

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const openModal = (product) => {
    setOpen(true)
    setProd({ ...product })
  }

  const addToCart = () => {
    setOpen(!open)
    if(quantity>0)
    setCart([...cart, { ...prod, quantity: quantity }])
    setQuantity(0)
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  const closeModal=()=>{
    setOpen(!open);
  }

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }

  const renderProducts = (category) => {
    return data.restaurant?.products.map((product) => {
      if (product.category === category) {
        return (
          <ProductCard
            key={product.id}
            product={product}
            quantity={product.quantity}
            openModal={openModal}
           
          />
        )
      }
    })
  }

  const categoriesList = data.restaurant?.products.map((product) => {
    return product.category
  })

  const products = [...new Set(categoriesList)].map((category) => {
    return (
      <ContainerProductCategory key={category} >
        <h2>{category}</h2>
        {renderProducts(category)}
      </ContainerProductCategory>
    )
  })

  return (
    <div>
      <Header />
      { isLoading ? <Loading/>:
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
     }
     {products}
     <ContainerModal open={open} onClick={(e) => (e.target === e.currentTarget ? closeModal() : null)}>
       <ModalSelect >
         <p>Selecione a quantidade desejada</p>
         <FormControl fullWidth>
           <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={quantity}
             onChange={handleChange}
           >
             <MenuItem value={0} disabled>
               0
             </MenuItem>
             <MenuItem value={1}>1</MenuItem>
             <MenuItem value={2}>2</MenuItem>
             <MenuItem value={3}>3</MenuItem>
             <MenuItem value={4}>4</MenuItem>
             <MenuItem value={5}>5</MenuItem>
             <MenuItem value={6}>6</MenuItem>
             <MenuItem value={7}>7</MenuItem>
             <MenuItem value={8}>8</MenuItem>
             <MenuItem value={9}>9</MenuItem>
             <MenuItem value={10}>10</MenuItem>
           </Select>
         </FormControl>
         <StyledButton
           variant="text"
           color="primary"
           onClick={() => addToCart()}
         >
           ADICIONAR AO CARRINHO
         </StyledButton>
       </ModalSelect>
     </ContainerModal>
     
    </div>
  )
}

export default RestaurantPage
