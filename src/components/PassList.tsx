import React from "react";
import PassListItem from "./PassListItem";
import {Pass} from "../App";
import '../styles/passList.css'

interface PassListProps {
    passType: Pass
}


const PassList: React.FC<PassListProps> = (props) => {
    return(
        <ul className="pass-list">
            {props.passType.options.map(passOption => {
                return (
                    <div key={passOption.id}>
                        <PassListItem options={passOption} ></PassListItem>
                    </div>
                )
            })}            
        </ul>
    )
}

export default PassList