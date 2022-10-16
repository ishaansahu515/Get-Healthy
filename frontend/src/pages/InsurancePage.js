import React from 'react'
import HealthInsurancePredict from '../components/feature/HealthInsurancePredict'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const InsurancePage = () => {
    return (
        <div>
            <Navbar />
            <HealthInsurancePredict />
            <Footer/>
        </div>
    )
}

export default InsurancePage
