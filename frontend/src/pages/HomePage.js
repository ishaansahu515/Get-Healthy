import React from 'react'
import Footer from '../components/Footer'
import HeaderCard from '../components/HeaderCard'
import Navbar from '../components/Navbar'
import ServiceCards from '../components/ServiceCards'

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