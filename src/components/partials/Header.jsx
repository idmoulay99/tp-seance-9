import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
const Header = ({children}) => {
  return (
    <header>
        <Navbar></Navbar>
        <Hero></Hero>
    </header>
  )
}

export default Header