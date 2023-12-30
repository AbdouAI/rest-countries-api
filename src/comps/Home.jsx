import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SelectReg from "./SelectReg";
import CountryList from "./CountryList";
import BackToTop from "./BackToTop";


const Home=(props)=>{

    const [countryList,setCountryList]=useState(props.countryList)
    const [filteredCountryList,setFilteredCountryList]=useState(props.countryList)

    const searchData=(searchTerm)=>{
        let newFilteredCountryList=[]
        let country=countryList.find((e)=>{
           return e.name.common.toLowerCase()===searchTerm || e.name.official.toLowerCase()===searchTerm
        })
        if(country){
            //console.log(country)
            newFilteredCountryList.push(country)
        }else{
            //console.log(country)
            newFilteredCountryList=""
        }
        setFilteredCountryList(newFilteredCountryList)
        
    }

    const filterData=(region)=>{
        let newFilteredCountryList=countryList.filter((e)=>{
           return e.region.toLowerCase()===region
        })
        console.log(newFilteredCountryList)
        setFilteredCountryList(newFilteredCountryList)
        
    }

    return(
        <div className="home-container">
            <div className="navigation">
                <SearchBar  childClick={searchData}/>
                <SelectReg childClick={filterData} isDark={props.isDark}/>
            </div>
            <CountryList countryList={filteredCountryList}/>
            <BackToTop isDark={props.isDark}/>
        </div>
            
        
    )
}
export default Home
