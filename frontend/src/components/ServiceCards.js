import React from 'react'
import image from '../images/image1.jpg'

const header=[
    'Disease Prediction',
    'Insurance Amount',
    'Health Realted Blog',

]
const text = [
    'Predict diseases related to specific features.',
    'Predict medical insurance amount.',
    'Publish health realted blogs My-Health he',
]

const ServiceCards = () => {
    return (<>
    <h1 className='d-flex justify-content-center align-items-center mt-1'>OUR SERVICES</h1>
        <div className='container '>
            <div className='row mt-3 '>
                {text.map((temp,i) => (
                    <div className="shadow-lg p-3 mb-5 bg-white rounded card mt-5 mx-auto sm-5  bg-light mb-3 p-3 mb-2 bg-light text-dark" style={{ width: "18rem" }}>
                        <p class="opacity-75 p-3 mb-2 ">{header[i]}</p>                      
                        <img className="card-img-top " src={image} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">{temp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default ServiceCards;
