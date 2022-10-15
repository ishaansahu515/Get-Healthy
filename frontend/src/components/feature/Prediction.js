import React from "react"
import { Link } from "react-router-dom"
import image from "../../images/detect.jpg"
import Footer from "../Footer"

const predictions = [
  {
    name:"Skin Issues",
    url:"/skin"
  },
  {
    name:"Stomach Issues",
    url:"/stomach"
  },
  {
    name:"Hepatitis",
    url:"/hepatitis"
  },
  {
    name:"Health Insurance",
    url:"/healthinsurance"
  },
  
]

const Prediction = () => {
  return (
    <>
      <div
        className="row row-cols-1 mx-auto row-cols-md-2 g-4 mt-3 mb-5"
        style={{ width: "80vw" }}
      >
        {predictions.map((ob) => (
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body rounded">
              <img src={image} className="card-img-top p-3" alt="..." />
              <div className="card-body">
                <Link className="text-decoration-none" to={`/services${ob.url}`}>
                  <h3 className="card-title text-center text-decoration-none">{ob.name}</h3>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Prediction
