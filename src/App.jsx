import { useState,useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

/* Pages */
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'

/* Components */
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import ProductDetail from './pages/ProductDetail'
import CartProvider from './context/CartContext'





function App() {
  return (
  
    <>
      
      <CartProvider>
        <NavBar/>
        
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/products/:id" element={<ProductDetail />} />

              <Route path="/products" element={<Products />} />

              <Route path="/cart" element={<Cart />} />
              
            </Routes>

        <Footer/>
      </CartProvider>
      
      



    </> 
      
    


  )






}
export default App
