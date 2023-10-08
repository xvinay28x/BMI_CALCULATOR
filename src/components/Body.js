import React from 'react'
import { useState } from 'react';
import './Body.css'
import Swal from 'sweetalert2';

export default function Body() {

    // const [sex, setSex] = usestate("");
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState("");

    // Logic-----

    let calbmi = (e) => {
        e.preventDefault();
        if (weight <= 0 || height <= 0) {
            Swal.fire('Please enter valid Height or Weight')
        }
        else {
            let bmi = (weight / (height/100 * height/100))
            setBmi(bmi.toFixed(1))

            if (bmi < 18.5) {
                setMessage("You are underweight ! 😒")
            }
            else if (bmi >= 18.5 & bmi <= 24.9) {
                setMessage("You are fit ! 😊")
            }
            else if (bmi >= 25.0 & bmi <= 29.9) {
                setMessage("You are overweight ! 😒")
            }    
            else {
                setMessage("You are obesity ! 😒")
            }
            e.
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
                            src="man.png"
                            alt="male"/>
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
                            src="woman.png"
                            alt="female"/>
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
                    <h1>{bmi}</h1>
                    <p>{message}</p>
                </div>
            </form>
        </div>
    )
}
