import { useState } from "react"
import axios from 'axios'

const formContainer = {
  margin: "auto",
  width: "50vw",
}

const symptoms = [
  'Itching',
  'Skin Rash',
  'Nodal Skin',
  'Joint Pain',
  'Dischrommic Path',
  'Pus filled Pimple',
  'Scurring',
  'Skin peeling',
  'Silver like Dusting',
  'Small Dents',
  "Inflammatory"
]

const SkinPredict = () => {
  const [val, setVal] = useState({
    itching: -1,
    skinrash: -1,
    nodalskin: -1,
    jointpain: -1,
    dischrommicpath: -1,
    pusfilledPimple: -1,
    scurring: -1,
    skinpeeling: -1,
    silverlikedusting: -1,
    smalldents: -1,
    inflammatory: -1,
  })

  const [result, setResult] = useState("")

  const handleChange = (e) =>
  {
    setVal((val)=>({...val,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("hello")
    let ctr = 0;
    for (const item in val) {
      if (val[item] === -1) {
        alert("enter!");
        return;
      }
      ctr = ctr + Number(val[item]);
    }
    console.log("ctr", val);
    if (ctr < 2) {
      alert("no disease!");
      return;
    }
    console.log(process.env.REACT_APP_BACKEND_URL)
    let obj = {feat:[]}
    for (const item in val){
      obj.feat.push(val[item])
    }
    const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/skin`, obj);
    setResult(data.answer);
    console.log(data.answer);
  } 

  return (
    <div>
      <h1 className="text-center">Skin Issue Prediction</h1>
        <form onSubmit={handleSubmit}  style={formContainer}>
      <div className="d-flex flex-wrap justify-content-around">
          {Object.keys(val).map((item,i) => (
            <div id={i} className="m-2 p-2">
              <label htmlFor={item}>{symptoms[i]}</label>
              <div>
                  <select name={item} value={val[item]} onChange={handleChange} className="custom-select">
                    <option selected value={-1}>Open this select menu</option>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
              </div>
              
            </div>
          ))}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button type="submit" className="btn btn-primary">
                Predict
          </button>
      </div>
        </form>
        <div className="d-flex justify-content-center align-items-center">
          <h3>Result: {result}</h3>
        </div>
    </div>
  )
}

export default SkinPredict
