import React from "react"
import './Card.css';
const Card = ({props}) => {
    console.log(props)
    return (
        <div className="card" key={props.id}>
                <h2>{props.name}</h2> 
                <p>{props.date}</p>
                <p>{props.time} pm</p>
                <p>Number of Guests: {props.guests}</p>
        </div>
    )
}


export default Card