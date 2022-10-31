import React from "react";

function Details({ hog }) {
    return (
        <div>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>{hog.greased ? "Greased" : "Not Greased"}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
    )
}

export default Details;