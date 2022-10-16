import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/image1.jpg'

const elements=[
    {
        header:'Disease Prediction',
        text: 'Predict diseases related to specific features.',
        url:'/services'
    },
    {
        header:'Insurance Amount',
        text: 'Predict medical insurance amount.',
        url:'/services/insurance'
    },
    {
        header:'Health Realted Blog',
        text: 'Publish health realted blogs',
        url:'/about'
    },
]

const ServiceCards = () => {
    return (<>
    <h1 className='d-flex justify-content-center align-items-center mt-1'>OUR SERVICES</h1>
        <div className='container '>
            <div className='row mt-3 '>
                {elements.map((e,i) => (
                    <div className="shadow-lg p-3 mb-5 bg-white rounded card mt-5 mx-auto sm-5  bg-light mb-3 p-3 mb-2 bg-light text-dark" style={{ width: "20rem" }}>
                        <Link to={`${e.url}`}>
                            <h3 class="opacity-75 text-center p-2 mb-2 ">{e.header}</h3>
                        </Link>                      
                        <img className="card-img-top " src={image} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text text-center">{e.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default ServiceCards;
