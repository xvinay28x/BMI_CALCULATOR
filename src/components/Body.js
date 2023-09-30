import React from 'react'
import './Body.css'

export default function body() {
    return (
        <div className="body">
            <h1 id="text">Choose Your Sex</h1>
            <div className="img_cont">
                <div className="male_cont">
                    <img id="male" src="man.png" />
                    <input id="male_inp" type="radio" name="sex" value="male"></input>
                </div>
                <div className="female_cont">
                    <img id="female" src="woman.png" />
                    <input id="female_inp" type="radio" name="sex" value="female"></input>
                </div>
            </div>
            <div class="height_cont">
                <input id="height" type="number"></input>
                <h1 id="height_label">Height <p id="cm">(cm)</p></h1>
            </div>
            <div class="weight_cont">
                <input id="weight" type="number"></input>
                <h1 id="weight_label">Weight <p id="kg">(kg)</p></h1>
            </div>
            <div className="button_cont">
                <button id="calculate">Calculate</button>
            </div>
        </div>
    )
}
