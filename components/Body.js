import { SWIGGY_API } from "../utils/constant"
import { useState, useEffect } from "react"
import Restaurant from "./Restaurant"
import RestaurantShimmer from "./RestaurantShimmer"

const Body = () => {
    //state variable - super powerful variable
    const [res, setRes] = useState([]);
    useEffect(() => {
        async function fectchData () {
            let response = await fetch(SWIGGY_API)
            let data = await response.json()
            setRes(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
        fectchData();
    }, [])
    if (res.length === 0) {
       return <RestaurantShimmer />
    }
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    const filtered = res.filter(item => item.info.avgRating > 4.5)
                    setRes(filtered)
                }}>Top Rated</button>
            </div>            
            <div className='res-container'>
                {
                    res.map((res) => {
                        return (<Restaurant key={res.info.id} res={res}/>)
                    })
                }
            </div>        
        </div>
    )
}

export default Body