import { useState } from "react"
import axios from 'axios'

const formContainer = {
    margin: "20px auto",
    maxWidth: "50vw",

}
const HealthInsurancePredict = () => {

    const [val, setVal] = useState({
        age: 0,
        sex: "",
        bmi: 0,
        children: 0,
        smoker: "",
        region: "",
    });
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVal((val) => ({
            ...val,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        setResult("Getting result");
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/medicalinsurance`, val);
        setResult(data.answer);
    }
    return (
        <>
            <h1 className="text-center">Health Insurance</h1>
            <form onSubmit={handleSubmit} style={formContainer}>
                <div className="form-row">
                    <div className="form-group col-md-6 my-2">
                        <label htmlFor="inputAge">Age</label>
                        <input
                            type="number"
                            id="inputState"
                            className="form-control"
                            name="age"
                            value={val.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-md-6 my-2">
                        <label htmlFor="inputSex4">Sex</label>
                        <select
                id="inputState"
                className="custom-select w-100 p-2"
                name="sex"
                value={val.sex}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
              </select>
                    </div>
                </div>
                <div className="form-group my-2 w-50">
                    <label htmlFor="inputAddress2">BMI</label>
                    <input
                            type="number"
                            id="inputState"
                            className="form-control"
                            name="bmi"
                            value={val.bmi}
                            onChange={handleChange}
                        />
                </div>
                <div className="form-group col-md-6 my-2 ">
                    <label htmlFor="inputChildren">Number of children</label>
                   
                    <div className="my-2">
                        <select className="custom-select w-100 p-2">
                            <option selected value="0">Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                        </select>
                    </div>
                </div>

                <div className="my-2">
                    <label htmlFor="inputCity">Smoker</label>
                    <div className="custom-select w-100 p-2">
                        <select className="custom-select w-50 p-2">
                            <option selected>Select</option>
                            <option value="yes">YES</option>
                            <option value="no">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-group col-md-4">
                    
                    <label htmlFor="inputState">Region</label>
                    <select
                        id="inputState"
                        class="form-control"
                        name="region"
                        value={val.region}
                        onChange={handleChange}
                    >
                        <option selected>Select</option>
                        <option value="northwest">North-West</option>
                        <option value="northeast">North-East</option>
                        <option value="southeast">South-East</option>
                        <option value="southwest">South-West</option>
                    </select>

                   
                </div>
                <button type="submit" className="btn btn-primary my-2 mx-auto">Predict</button>
            </form>
            <div className="d-flex justify-content-center align-items-center">
          <h3>Result: Rs. {result}</h3>
        </div>
        </>
    )
}

export default HealthInsurancePredict
