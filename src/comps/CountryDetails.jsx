import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BorderCtrsLinks from "./BorderCtrsLinks";
import BackBtn from "./BackBtn";
import Map from "./Map";

const CountryDetails=(props)=>{
    const {code}=useParams()
    const [country,setCountry]=useState(null)
    const [countryList,setCountryList]=useState(JSON.parse(localStorage.getItem("data")))


    const currCountry=()=>{
        let country=countryList.find((e)=>{
            return e.cca3===code
        })
        setCountry(country)
    }

    const borderCtrsNames=()=>{
        let codeCtrList;
        let borderCtrs;
        if(country.borders){
        let borderCtrsCode=country.borders
        borderCtrs=countryList.filter((e)=>{
            return borderCtrsCode.includes(e.cca3)
        })
        codeCtrList=borderCtrs.map((e)=>{
            return [e.cca3,e.name.common]
        })
    
    }else{
            codeCtrList=""
        }
        return codeCtrList
        
    }

    const stats=(stat)=>{
        let statsList=""
        if(stat==="currencies"){
            for(let c in country[stat]){
                statsList+=`${country[stat][c]["name"]}, `
            } 
        }else if(stat==="languages"){
            for(let c in country[stat]){
                statsList+=`${country[stat][c]}, `
            } 
        }else if(stat==="nativeName"){
                statsList+=`${country["name"]["nativeName"][Object.keys(country["name"]["nativeName"])[0]]["common"]}, `
            
        }
        let newStatsList=statsList.slice(0,-2)
        return newStatsList
    }

    useEffect(()=>{
        currCountry()
    },[])

    
    return( 
            <div className="country-details-container">
            <div className="country-details-inner">
            <BackBtn isDark={props.isDark}/>
            {country&&(
            <>
            <div className="country-info">
            <img className="flag-img-detail" src={country.flags.png} alt={country.flags.alt} />
            <div className="right-text">
                <h2>{country.name.common}</h2>
                
                <div className="cols">
                    <div className="col1">
                        <p><span className="stat">Native Name: </span>{stats("nativeName")}</p>
                        <p><span className="stat">Population: </span>{new Intl.NumberFormat('en-US').format(country.population)}</p>
                        <p><span className="stat">Region: </span>{country.region}</p>
                        <p><span className="stat">Sub Region: </span>{country.subregion}</p>
                        <p><span className="stat">Capital: </span>{country.capital}</p>
                    </div>
                    <div className="col2">
                        <p><span className="stat">Top Level Domain: </span>{`${country.cca2.toLowerCase()}.`}</p>
                        <p><span className="stat">Currencies: </span>{stats("currencies")}</p>
                        <p><span className="stat">Languages: </span>{stats("languages")}</p>
                    </div>
                </div>
            <BorderCtrsLinks codeAndName={borderCtrsNames()}/>
            </div>
            </div>
            <Map cords={country.latlng}/>
            </>
            )}
            </div>
        </div>
        
    )
}
export default CountryDetails
