import React from "react";
import PassListItem from "./PassListItem";
import {Pass} from "../App";
import '../styles/passList.css'

interface PassListProps {
    passType: Pass
}


const PassList: React.FC<PassListProps> = ({passType}) => {
    return(
        <ul className="pass-list">
            {passType.options.map(passOption => {
                return (
                    <div key={passOption.id}>
                        <PassListItem option={passOption} ></PassListItem>
                    </div>
                )
            })}            
        </ul>
    )
}

export default PassList