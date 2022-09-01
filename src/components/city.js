import React from "react";
import "../style/style1.css";

const City = ({ city })=>{
    return(
        <div className="container">
            <h1>{city.name}</h1>
            <h2>{city.main.temp} C</h2>
            <h3>{city.weather[0].description}</h3>
        </div>
    )
}

export default City;