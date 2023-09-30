import React from 'react'
import { useState } from 'react';
import './Body.css'

export default function Body() {

    // const [sex, setSex] = usestate("");
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [bmi, setBmi] = useState();
    const [message, setMessage] = useState("");

    // Logic-----

    let calbmi = (e) => {
        e.preventDefault();
        if (weight == 0 || height == 0) {
            alert("Please enter the valid height or weight")
        }
        else {
            let bmi = (weight / (height * height) * 703)
            setBmi(bmi.toFixed(1))

            if (bmi < 25) {
                setMessage("You are underweight")
            }
            else if (bmi >= 25 & bmi < 30) {
                setMessage("You are fir")
            }
            else {
                setMessage("You are overweight")
            }
        }
    }

    return (
        <div className="body">
            <h1 id="text">Choose Your Sex</h1>
            <form onSubmit={calbmi}>
                <div className="img_cont">
                    <div className="male_cont">
                        <img
                            id="male"
                            src="man.png" />
                        <input
                            id="male_inp"
                            type="radio"
                            name="sex"
                            value={"male"}>
                        </input>
                    </div>
                    <div className="female_cont">
                        <img
                            id="female"
                            src="woman.png" />
                        <input
                            id="female_inp"
                            type="radio"
                            name="sex"
                            value={"female"}>
                        </input>
                    </div>
                </div>
                <div class="height_cont">
                    <input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}>
                    </input>
                    <h1 id="height_label">Height <p id="cm">(cm)</p></h1>
                </div>
                <div class="weight_cont">
                    <input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}>
                    </input>
                    <h1 id="weight_label">Weight <p id="kg">(kg)</p></h1>
                </div>
                <div className="button_cont">
                    <button
                        id="calculate"
                        type="submit">Calculate
                    </button>
                </div>
                <div className="result_cont">
                    <h1>Your BMI is : {bmi}</h1>
                    <p>{message}</p>
                </div>
                <h1>jbhdicnondo</h1>
                <h1>jbhdicnondo</h1>
                <h1>jbhdicnondo</h1>
                <h1>jbhdicnondo</h1>
                <h1>jbhdicnondo</h1>
            </form>
        </div>
    )
}
