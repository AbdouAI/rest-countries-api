import React from "react";
import { Link } from "react-router-dom";

const Page404=()=>{

    return(
        <div className="page-404-container">
            <h1 className="title-404">404</h1>
            <h2 className="sub-title-404">Whoops!</h2>
            <p className="text-404">
                You've strayed too far from earth.
            </p>
            <Link className="link-404" to={"/rest-countries-api"}>Go Back</Link>
        </div>
    )
}
export default Page404