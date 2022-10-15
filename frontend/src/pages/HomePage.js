import React from 'react'
import Footer from '../components/Footer'
import HeaderCard from '../components/HeaderCard'
import Navbar from '../components/Navbar'
import ServiceCards from '../components/ServiceCards'
import About from './About'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeaderCard/>
    <ServiceCards/>
    <Footer/>
    </>
  )
}

export default HomePage;