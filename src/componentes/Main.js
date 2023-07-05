import React from 'react'
import heroImage from '../assets/images/restauranfood.jpg'
import '../styles/main.css'
import greek from '../assets/images/greek salad.jpg'
import bruchetta from '../assets/images/bruchetta.svg'
import lemon from '../assets/images/lemon dessert.jpg'

function Hero() {
  return (
   <section className="hero">
     <div className='heroup'></div>
     <div className='generalInfo'>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <input type="button" value="Reserve a Table"/>
     </div>
     <div className='herobottom'></div>
     <img className='heroimage' src={heroImage} width="280px" alt="imagen de comida del restaurante"/>
   </section>
  )
}

function Specials() {
 const dataCard= [{
  class: 'greek',
  name: 'Greek Salad',
  price: 12.99,
  description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
  orderDelivery: true
 },{
  class: 'bruchetta',
  name: 'Brucheta',
  price: 5.99,
  description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil',
  orderDelivery: true
 },{
  class: 'lemon',
  name: 'Lemon Dessert',
  price: 5.00,
  description: 'This comes straight from grandma´s recipe book, every last ingredient has been sourced and is as authentic as can be imagined',
  orderDelivery: true
 }]
 return (
  <section className="specials">
   <h1>This week specials!</h1>
   <input type="button" value="Online Menu" />
   <Card imagen={greek} info={dataCard[0]}/>
   <Card imagen={bruchetta} info={dataCard[1]}/>
   <Card imagen={lemon} info={dataCard[2]}/>
  </section>
 )
}

function Card({imagen, info}) {
  return (
    <div className={info.class}>
     <img src={imagen} width="100%" alt="imagen descriptiva"/>
     <h3>{info.name}</h3>
     <h3>{info.price}</h3>
     <p>{info.description}</p>
    </div>
  )
}

function Comments() {
 return (
   <section className='comments'>
    comments
   </section>
 )
}

function Main() {
  return (
    <main>
     <div className="main">
      <Hero/>
      <Specials/>
      <Comments/>
     </div>
    </main>
  )
}

export default Main