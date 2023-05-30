import React from "react";
import Card from "../Card/Card";
import './Main.css';
const Main = ({ props }) => {
   const cards = props.map((rez) => {
    return (
        <div className="eachCard">
            <Card key={rez.id} props={rez} />
        </div>
    )
   })
    return (
        <div className="resy-container">{cards}</div>
    )
}

export default Main