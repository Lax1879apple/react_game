import React from 'react';
import './Card.css';

const Card = props => (
    <div
        role="img"
        onClick={() => props.handleClick(props.id)}
        className={`card${props.shake ? " shake" : ""}`}
        style={{ backgroundImage: `url("${props.image}")`}}
    /> 
      
);
export default Card;