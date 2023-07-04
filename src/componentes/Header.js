import React from 'react';
import Nav from '../componentes/Nav';
import Logo from './Logo';
import '../styles/header.css'

function Header() {
  return (
   <header className='header'>
    <Logo/>
    <Nav/>
   </header>
  )
}

export default Header