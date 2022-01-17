import React from "react";
import {Item} from "../App";
import '../styles/passListItem.css'

interface PassListItemProps {
    options: Item
}

const PassListItem: React.FC<PassListItemProps> = (props) => {
    return (
        <li className="list-item">{props.options.title}</li>
    )
}

export default PassListItem