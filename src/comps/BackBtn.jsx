import React from "react";
import back from "./imgs/backIco.png"
import backDark from "./imgs/backIcoDark.png"

const BackBtn=(props)=>{

    let img=props.isDark?backDark:back
    let imgStyleDark={width:"18px"}

    const clickHandler=()=>{
        history.back()
    }

    return(
        <div className="back-btn" onClick={clickHandler}>
            <img src={img} alt="back" style={props.isDark?imgStyleDark:{}}/>
            <p>Back</p>
        </div>
    )
}
export default BackBtn