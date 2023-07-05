import React from 'react'
import heroImage from '../assets/images/restauranfood.jpg'
import '../styles/main.css'

function Hero() {
  const heroUpStyle = {
   backgroundColor: "#495E57",
  }
  const heroDnStyle = {
   backgroundColor: "#EDEFEE",
  }
  const imageHero = {
   
  }
  return (
   <>
     <div style={heroUpStyle}>HeroUp</div>
     <div style={heroDnStyle}>HeroBottom</div>
     <img style={imageHero} src={heroImage} height="200px" width="300px" alt="imagen de comida del restaurante"/>
   </>
  )
}

function Specials() {
 return (
   <div>Specials</div>
 )
}

function Comments() {
 return (
   <div>Comments</div>
 )
}

function Main() {
  return (
    <main className="main">
     <Hero className="hero"/>
     <Specials/>
     <Comments/>
    </main>
  )
}

export default Main