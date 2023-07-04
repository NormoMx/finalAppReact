import React from 'react'
import Imgfooter from '../assets/images/restaurant.jpg'


function Footer() {
  return (
    <footer>
     Footer<br/>
     <img src={Imgfooter} alt="Imagen de footer" width="300px"/>
     <div><h3>Doormat<br/> Navigation</h3></div>
     <div><h3>Contact</h3></div>
     <div><h3>Social Media</h3></div>
    </footer>
  )
}

export default Footer