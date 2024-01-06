import React from "react";
import moonDark from "./imgs/moonDark.png"
import moon from "./imgs/moon.svg"
import { Link, Outlet } from "react-router-dom";

const Header=(props)=>{

    let img=props.isDark?moonDark:moon

    const lightModeClick=()=>{
        props.childClick()
    }

    return(
        <>
        <header>
            <div className="inner-header">
                <Link to={"/rest-countries-api"}><h1>Where in the world?</h1></Link>
                <div className="luminosity-btn" onClick={lightModeClick}>
                    <img src={img} alt="Crescent" /><p> Dark Mode</p>
                </div>
            </div>
        </header>
        <Outlet/>
        </>
    )
}
export default Header





