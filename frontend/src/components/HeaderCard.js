import React from 'react'
import image from '../images/image.jpg'

const cardStyle={
    height:"400px",
    width:"500px",
    marginTop:"100px",
    background:"transparent"
}

const HeaderCard = () => {
  return (
    <>
      <div className="row m-0" style={{background:`#ffffff url(${image}) no-repeat`,backgroundSize:"100%"}}>
  <div className="col-sm-6 ms-5" >
    <div className="card border-0" style={cardStyle}>
      <div className="card-body">
        <h1 className="card-title ">Wellness Builds Upon the Medical</h1>
        <p className="card-text fs-5 text-lg-start">Our spcialist always aspire to bridge the gap between your benefits plan and the health needs of your family.</p>
        <a href="/" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default HeaderCard
