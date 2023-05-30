import React from "react"
import './Card.css';
const Card = ({props}) => {
    return (
        <div className="card" key={props.id}>
                <h2>{props.name}</h2> 
                <p>{props.date}</p>
                <p>{props.time} pm</p>
                <p>Number of Guests: {props.number}</p>
        </div>
    )
}


export default Card