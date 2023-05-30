import React from "react";
import Card from "../Card/Card";
import './Main.css';
const Main = ({ props }) => {
   const cards = props.map((rez, index) => {
    return (
        <div key={index} className="eachCard">
            <Card key={index} props={rez} />
        </div>
    )
   })
    return (
        <div className="resy-container">
            {cards}
        </div>
    )
}

export default Main