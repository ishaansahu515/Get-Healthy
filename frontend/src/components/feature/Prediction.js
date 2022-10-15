import React from "react"
import image from "../../images/detect.jpg"
import Footer from "../Footer"

const predictions = [
  "Skin Issues",
  "Stomach Issues",
  "Hepatitis",
  "Health Insurance",
]

const Prediction = () => {
  return (
    <>
      <div
        className="row row-cols-1 mx-auto row-cols-md-2 g-4 mt-3 mb-5"
        style={{ width: "80vw" }}
      >
        {predictions.map((text) => (
          <div className="col">
            <div className="card">
              <img src={image} className="card-img-top p-3" alt="..." />
              <div className="card-body">
                <h3 className="card-title text-center">{text}</h3>
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
