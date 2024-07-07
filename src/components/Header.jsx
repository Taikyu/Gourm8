import React, { useContext } from 'react'

import logo from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from './store/CartContext'
import UserStoryContext from './store/UserStoryContext'

function Header() {
  const userStory = useContext(UserStoryContext)
  const { items } = useContext(CartContext)
  const totalCartItems = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  function showCartHandler() {
    userStory.showCart()
  };

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt="food order bell" />
        <h1>Gourm8</h1>
      </div>
      <nav>
        <Button onClick={showCartHandler} textBtn >Cart ({totalCartItems})</Button>
      </nav>

    </header>
  )
}

export default Header
