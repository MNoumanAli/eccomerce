import React from 'react'
import AdvertiseBar from '../../Components/AdvertiseBar'
import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import NavBar from '../../Components/NavBar'
import NewsLetter from '../../Components/NewsLetter'
import Products from '../../Components/Products'

function HomePage() {
  return (
    <div>
        <AdvertiseBar/>
        <NavBar/>
        <Hero/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default HomePage