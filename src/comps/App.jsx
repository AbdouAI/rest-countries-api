import React, { useEffect, useState } from "react";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import Loading from "./Loading";
import CountryDetails from "./CountryDetails";
import Page404 from "./Page404";

const App=()=>{
    const [countryList,setCountryList]=useState(null)
    const [failedFetch,setFailedFetch]=useState(false)
    const [isDark,setIsDark]=useState(false)

    async function fetchData(){
        try{
            const res=await fetch("https://restcountries.com/v3.1/independent?status=true")
            const data=await res.json()
            //console.log(data,"fetch")
            localStorage.setItem("data",JSON.stringify(data))
            setCountryList(data)
        }catch(e){
            setFailedFetch(true)
            console.log(e)
        }
    }
    async function getData(){
        if(localStorage.getItem("data")){
            setCountryList(JSON.parse(localStorage.getItem("data")))
            console.log(JSON.parse(localStorage.getItem("data")),"local")
        }else{
            fetchData()
        }
        
    }

    const changeLumMode=()=>{
        localStorage.setItem("isDark",JSON.stringify(!isDark))
        setIsDark(prev=>!prev)
    }

    useEffect(()=>{
        if(localStorage.getItem("isDark")){
            setIsDark(JSON.parse(localStorage.getItem("isDark")))
        }
        getData()
    },[])

    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Header childClick={changeLumMode} isDark={isDark}/>}>
                <Route path="/rest-countries-api" element={countryList===null && !failedFetch?<Loading/>:failedFetch?<p style={{fontSize:"1.5rem",padding:"2rem"}}>Error:Make sure you are connected to the internet</p>:<Home countryList={countryList} isDark={isDark}/>}/>
                <Route path="/rest-countries-api/country/:code" element={<CountryDetails countryList={countryList}  isDark={isDark}/> } key={window.location.pathname}/>
                <Route path="*" element={<Page404/>}/>
            </Route>
        )
    )

    return(
            <div className={isDark?"app-container dark":"app-container"}>
                <RouterProvider router={router}>
                </RouterProvider>
            </div>
          
    )
}
export default App