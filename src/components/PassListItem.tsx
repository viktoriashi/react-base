import React from "react";
import {Item} from "../App";
import '../styles/passListItem.css'

interface PassListItemProps {
    option: Item
}

const PassListItem: React.FC<PassListItemProps> = ({option}) => {
    return (
        <li className="list-item">{option.title}</li>
    )
}

export default PassListItem