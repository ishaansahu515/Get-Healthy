import { useState } from "react"
import axios from 'axios'

const formContainer = {
  margin: "auto",
  width: "58vw",
}

const symptoms = [
  'Itching',
  'Joint Pain',
  'Vomiting',
  'Fatigue',
  'Lethargy',
  'High Fever',
  'Yellowish Skin',
  'Dark Urine',
  'Nausea',
  'Loss of Apetite',
  "Abdominal Pain",
  "Diarrhoea",
  "Mild Fever",
  "Yellow Urine",
  "Yellowing of Eyes",
  "Acute Liver Faliure",
  "Malaise",
  "Muscle Pain",
  "Family History",
  "Receiving Blood Transfusion",
  "Receiving Unsterile Injections",
  "Coma",
  "Stomach Bleeding"
]

const HepatitisPredict = () => {
  const [val, setVal] = useState({
    itching: -1,
    jointpain: -1,
    vomiting: -1,
    fatigue: -1,
    lethargy: -1,
    highfever: -1,
    yellowishskin: -1,
    darkurine: -1,
    nausea: -1,
    lossofappetite: -1,
    abdominalpain: -1,
    diarrhoea: -1,
    mildfever: -1,
    yellowurine: -1,
    yellowingofeyes: -1,
    acuteliverfailure: -1,
    malaise: -1,
    musclepain: -1,
    familyhistory: -1,
    recievingbloodtransfusion: -1,
    recievingunsterileinjections: -1,
    coma: -1,
    stomachbleeding: -1,
  })

  const [result, setResult] = useState("")

  const handleChange = (e) =>
  {
    setVal((val)=>({...val,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    let ctr = 0;
    for (const item in val) {
      if (val[item] === -1) {
        alert("enter!");
        return;
      }
      ctr = ctr + Number(val[item]);
    }
    if (ctr < 2) {
      alert("no disease!");
      return;
    }
    
    let feat = []
    for (const item in val){
      feat.push(val[item])
    }
    setResult("Getting Result");
    const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/hepatitis`, {feat});
    setResult(data.answer);
  } 

  return (
    <div>
      <h1 className="text-center">Hepatitis Prediction</h1>
        <form onSubmit={handleSubmit}  style={formContainer}>
      <div className="row">
          {Object.keys(val).map((item,i) => (
            <div id={i} className="col m-2 p-2">
              <label htmlFor={item}>{symptoms[i]}</label>
              <div style={{width:"200px"}}>
                  <select name={item} value={val[item]} onChange={handleChange} className="custom-select w-100">
                    <option selected value={-1}>Select</option>
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

export default HepatitisPredict
