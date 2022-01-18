import React from "react";
import PassList from "./PassList";
import { Pass, printPassType } from "../App";
import passIcon from "../images/pass-icon.png"
import '../styles/passForm.css'

interface PassFormProps {
    passType: Pass
}

const PassForm: React.FC<PassFormProps> = ({passType}) => {
    
    return (
        <div className="box box-passform">
            <div className="box-passform__pass-type">
                <img src={passIcon} className="box-passform__icon"></img> 
                <h3 className="pass-type__text">{passType.title}</h3>
                <div className="pass-type__common-text">What You'll Get</div>
            </div>
            <div className="box-passform__choice">
                <div className="box-passform__conditions">
                    <PassList passType={passType}></PassList>
                    <div className="box-passform__period"><span className="box-passform__price_bold">${passType.price}</span>/{passType.period}</div>
                </div>
                <button className="box-passform__button" onClick={() => printPassType(passType.title)}>Choose</button>
            </div>
        </div>
    )
}

export default PassForm