import React from "react";
import { Link } from "react-router-dom";

const BorderCtrsLinks=(props)=>{

    const linkClickHandler=()=>{
        props.childClick()
    }

    const bordersLinks=()=>{
        let el;
        if(typeof props.codeAndName==="object"){
            el=props.codeAndName.map((e,ind)=>{
                return <Link className="border-link" to={`/rest-countries-api/country/${e[0]}`} key={ind} onClick={linkClickHandler}>{e[1]}</Link>
            })
        }else{
            el=<p>none</p>
        }
        return el
    }

    return(
        <div className="border-ctrs-container">
            <p><span className="stat">Border Countries: </span></p>
            <div className="link-container">
            {
                bordersLinks() 
            }
            </div>
        </div>
    )
}
export default BorderCtrsLinks