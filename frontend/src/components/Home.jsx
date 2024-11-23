import React from 'react'
import Navbar from './shared/navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './LatestJob'
import Footer from './shared/Footer'
const Home = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <CategoryCarousel/>
    <LatestJob/>
    <Footer/>
    
    </div>
    
  )
}

export default Home
