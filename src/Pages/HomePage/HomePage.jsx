import React from 'react'
import AdvertiseBar from '../../Components/AdvertiseBar'
import Hero from '../../Components/Hero'
import NavBar from '../../Components/NavBar'
import Products from '../../Components/Products'

function HomePage() {
  return (
    <div>
        <AdvertiseBar/>
        <NavBar/>
        <Hero/>
        <Products/>
    </div>
  )
}

export default HomePage