import React, { useContext } from 'react'

import logo from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from './store/CartContext'

function Header (){
  const {items} =useContext(CartContext)
  const totalCartItems = items.reduce((total, item)=>{
    return total + item.quantity
  },0)

  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logo} alt="food order bell" />
            <h1>Gourm8</h1>
        </div>
        <nav>
         <Button textBtn >Cart ({totalCartItems})</Button>
        </nav>
      
    </header>
  )
}

export default Header
