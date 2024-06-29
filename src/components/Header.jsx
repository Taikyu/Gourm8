import React from 'react'

import logo from "../assets/logo.jpg"

function Header (){
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logo} alt="food order bell" />
            <h1>Gourm8</h1>
        </div>
        <nav>
            <button>Cart (0)</button>
        </nav>
      
    </header>
  )
}

export default Header
