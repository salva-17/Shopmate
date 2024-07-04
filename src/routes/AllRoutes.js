import { ProductList, Cart } from "../pages";
import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<ProductList/>}/>               
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </>
  )
}
