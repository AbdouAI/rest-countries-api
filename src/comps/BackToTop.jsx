import React from "react";
import top from "./imgs/downIco.png"
import topDark from "./imgs/downIcoDark.png"

const BackToTop=(props)=>{

    let img=props.isDark?topDark:top
    let imgStyle={width:"18px"}

    const clickHandler=()=>{
        window.scrollTo({top:0})
    }

    return(
        <div className="top-btn" onClick={clickHandler}>
            <img src={img} alt="top" style={imgStyle}/>
        </div>
    )
}
export default BackToTop