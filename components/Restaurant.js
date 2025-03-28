import { IMG_URL } from "../utils/constant"
import { Link } from 'react-router-dom'
const Restaurant = ({res}) => {
    const {name, avgRating, cuisines, cloudinaryImageId, id} = res.info
    return (
        <Link to={`/restaurant/${id}`}>
            <div className="res-card">
                <img src={IMG_URL+cloudinaryImageId} alt="" className="food-img" />
                <h3 className="">{name}</h3>
                <h4 className="cuisine">{cuisines.map((item) => item).join(", ")}</h4>
                <h4 className="cuisine rating">{avgRating}</h4>
            </div>
        </Link>
    )
}

export default Restaurant