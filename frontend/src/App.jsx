import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlayOrder from './pages/PlaceOrder/PlayOrder'
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';
import Menu from './pages/menu/menu';
import Contact from './pages/contact/contact';
import About from './pages/about/about';

const App = () => {
  const[showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}

    
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
     
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlayOrder/>}/>
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorder' element={<MyOrders/>}/>
         <Route path="/menu" element={<Menu />} />
         <Route path="/contact" element={<Contact />} />
         <Route path='/about' element={<About />} />

      </Routes>
    </div>
    <Footer/>
    </>

  
  )
}

export default App
