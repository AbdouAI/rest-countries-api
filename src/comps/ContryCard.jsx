import React from "react";
import { Link } from "react-router-dom";


const CountryCard=(props)=>{

    const caps=()=>{
        let capsList=""
            for(let c of props.country["capital"]){
                capsList+=`${c}, `
            } 
        return capsList.slice(0,-2)
    }

    return(
        <Link to={`/country/${props.country.cca3}`}>
            <div className="country-card-container">
                <img className="flag-img" src={props.country.flags.png} alt={props.country.flags.alt} />
                <div className="inner-text">
                    <h2>{props.country.name.common}</h2>
                    <p><span className="stat">Population: </span>{new Intl.NumberFormat('en-US').format(props.country.population)}</p>
                    <p><span className="stat">Region: </span>{props.country.region}</p>
                    <p><span className="stat">Capital: </span>{caps()}</p>
                </div>
            </div>
        </Link>
    )
}
export default CountryCard