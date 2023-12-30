import React, { useEffect } from "react";


const Map=(props)=>{


    useEffect(()=>{
        const [lat,lng]=props.cords
        var map = L.map('map').setView([lat, lng], 5)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        minZoom: 1.7,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([lat, lng]).addTo(map)
        return ()=>{
            map.remove()
        }
    })

    return(
        <div className="map-container">
            <div className="map" id="map"></div>
        </div>
    )
}
export default Map