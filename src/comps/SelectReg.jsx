import React from "react";
import down from "./imgs/downIco.png"
import downDark from "./imgs/downIcoDark.png"


const SelectReg=(props)=>{

    let img=props.isDark?downDark:down

    const selectClickHandler=()=>{
        document.getElementById("optionContainer").classList.toggle("show-options")
    }

    const optionClickHandler=(e)=>{
        props.childClick(e.target.textContent.toLowerCase())
    }

    return(
        <div className="select-container">
            <div className="select" onClick={selectClickHandler}>
                <p>Filter by region</p><img src={img} alt="select" />
            </div>
            <div className="option-container" id="optionContainer">
                <div className="option" onClick={(e)=>{optionClickHandler(e)}}><p>Africa</p></div>
                <div className="option" onClick={(e)=>{optionClickHandler(e)}}><p>Americas</p></div>
                <div className="option" onClick={(e)=>{optionClickHandler(e)}}><p>Asia</p></div>
                <div className="option" onClick={(e)=>{optionClickHandler(e)}}><p>Europe</p></div>
                <div className="option" onClick={(e)=>{optionClickHandler(e)}}><p>Oceania</p></div>
            </div>
        </div>
    )
}
export default SelectReg

