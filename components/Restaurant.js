import { IMG_URL } from "../utils/constant"
const Restaurant = ({res}) => {
    console.log(res.info)
    const {name, avgRating, cuisines, cloudinaryImageId} = res.info
    return (
        <div className="res-card">
            <img src={IMG_URL+cloudinaryImageId} alt="" className="food-img" />
            <h3 className="">{name}</h3>
            <h4 className="cuisine">{cuisines.map((item) => item).join(", ")}</h4>
            <h4 className="cuisine rating">{avgRating}</h4>
        </div>
    )
}

export default Restaurant