import React from 'react'
import Hero from '../componentes/Hero'
import Specials from './Specials'
import Comments from './Comments'
import '../styles/main.css'

function Main() {
  return (
    <main className='principal'>
     <Hero/>
     <Specials/>
     <Comments/>
    </main>
  )
}

export default Main