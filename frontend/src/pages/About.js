import React from 'react'
// import SCard from '../components/feature/SCard'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'

function About() {
    return (
        <>
          <Navbar/>
          <div className='d-flex justify-content-center align-items-center'>
              <h1>About Us.</h1>
          </div>
          <AboutUs/>
        </>
      )
}

export default About;
