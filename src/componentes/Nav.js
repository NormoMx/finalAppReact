import React from 'react'
import '../styles/header.css'

function Nav() {
  return (
    <nav className='links'>
      <li><a href="/home">Home</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/reservations">Reservations</a></li>
      <li><a href="/orders">Order Online</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/login">Login</a></li>
    </nav>
  )
}

export default Nav