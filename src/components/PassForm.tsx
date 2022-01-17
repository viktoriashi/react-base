import React from "react";
import PassList from "./PassList";
import { Pass, printPassType } from "../App";
import deadHeadIcon from "../images/dead-head-icon.png"
import '../styles/passForm.css'

interface PassFormProps {
    passType: Pass
}

const PassForm: React.FC<PassFormProps> = (props) => {
    
    return (
        <div className="box box-passform">
            <div className="box-passform__pass-type">
                <img src={deadHeadIcon} className="box-passform__icon"></img> 
                { props.passType.period === 'day' ? 
                (
                    <h3 className="pass-type__text">Day Pass</h3>
                        ) : (
                    <h3 className="pass-type__text">Monthly Pass</h3>
                )}
                <div className="pass-type__common-text">What you'll get</div>
            </div>
            <div className="box-passform__choice">
                <div className="box-passform__conditions">
                    <PassList passType={props.passType}></PassList>
                    <div className="box-passform__price"><span className="box-passform__price_bold">${props.passType.price}</span>/{props.passType.period}</div>
                </div>
                <button className="box__button" onClick={(e) => printPassType(props.passType.period)}>Choose</button>
            </div>
        </div>
    )
}

export default PassForm