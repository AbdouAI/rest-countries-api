import React from "react";
import CountryCard from "./ContryCard";

const CountryList=(props)=>{

    const setCountryCards=()=>{
        let el;
        if(typeof props.countryList==="object"){
            el=props.countryList.map((e,ind)=>{
                return(
                    <CountryCard country={e} key={ind}/>
                )
            })
        }else{
            el=<p style={{textAlign:"center"}}>Country Doesn't Exist</p>
        }
        return el
    }

    return(
        <div className="country-list-container">
            {
                setCountryCards()
            }
        </div>
    )
}
export default CountryList
