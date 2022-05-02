import React, { useState } from "react";
import './styles/Square.css';

const Square = (props) => {
    return (
        <button className="square" onClick = {() => props.onClick()}>
            {props.symbol}
        </button>
    )
}

export default Square;