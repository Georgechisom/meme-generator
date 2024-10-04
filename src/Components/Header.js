import React from 'react'
import "../styles/Meme.css";
import '../styles/Header.css'

function Header() {


  return (
    <header className='header'>
      <img src="./images/luxurybus.jpg" className='header-image' />
      <h2 className="header-title"> Meme Generator </h2>
      <h4 className='header-project'>Winsome ~ Code</h4>
    </header>
  )
}

export default Header;