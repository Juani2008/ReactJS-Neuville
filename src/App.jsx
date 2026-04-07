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
import ProductsPage from './pages/Products'
import ProductDetail from './pages/ProductDetail'


import { getProducts } from './services/firestore'


function App() {
  getProducts()
  return (
  
    <>

    
    {/* <NavBar/>
    
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/products/:id" element={<ProductDetail />} />
          
        </Routes>

      <Footer/> */}

    </> 
      
    


  )






}
export default App
