import React, { useState } from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
    const [filter, setFilter] = useState("All")
    const [sort, setSort] = useState("")

    function handleFilterChange(event) {
        setFilter(event.target.value)
    }

    const hogsToDisplay = hogs.filter((hog) => {
        if (filter === "All") {
            return true
        } else {
            return hog.greased === true
        }
    })

    const hogSort = hogsToDisplay.filter((hog) => {
        if (sort === "") {
            return true
        }
        if (hog.name === sort) {
            return true
        }
    });

    const hogList = hogSort.map((hog) => {
        return <HogCard hog={hog} />
    })
        
    return (
        <div>
            <select defaultValue={filter} onChange={handleFilterChange}>
                <option value= "All">All</option>
                <option value="Greased">Greased</option>
            </select>
            <form typeof="submit" onSubmit={(e) => setSort(e.target.value)}>
                <input placeholder="sort" value={sort} onChange= {(e) => setSort(e.target.value)}></input>
            </form>
            <h2>Our Prize Winning Hogs!</h2>
            {hogList}
        </div>
    )
}

export default HogList;