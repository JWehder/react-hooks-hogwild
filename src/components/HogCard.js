import React, { useState } from "react";
import Details from "./Details"


function HogCard({ hog }) {

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(!isClicked)
    }

    return (
        <div className="pigTile" onClick={handleClick}>
            <img src={hog.image} alt= {hog.name}/>
            <h2>{hog.name}</h2>
            {isClicked ? <Details hog= {hog} /> : ""}
        </div>
    )
}

export default HogCard;