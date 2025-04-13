import { SWIGGY_API } from "../utils/constant";
import { useState, useEffect } from "react";
import Restaurant, { RestaurantPromo } from "./Restaurant";
import { useState, useEffect, useContext } from "react";
import Restaurant from "./Restaurant";
import RestaurantShimmer from "./RestaurantShimmer";
import { UserContext } from "../utils/UserContext";

const Body = () => {
  //state variable - super powerful variable
  const [res, setRes] = useState([]);
  const [search, setSearch] = useState("");
  const [resList, setresList] = useState([]);

  const RestaurantPromotion = RestaurantPromo(Restaurant);

  const {setUserName, loggedInUser} = useContext(UserContext)
  useEffect(() => {
    async function fectchData() {
      let response = await fetch(SWIGGY_API);
      let data = await response.json();
      setRes(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
      setresList(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
    }
    fectchData();
  }, []);
  if (res.length === 0) {
    return <RestaurantShimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = res.filter((item) => item.info.avgRating > 4.5);
            setresList(filtered);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() =>
            setresList(
              res.filter((item) =>
                item?.info?.cuisines.some((cuisine) =>
                  cuisine.toLowerCase().includes(search.toLowerCase()),
                ),
              ),
            )
          }
        >
          Search
        </button>
      </div>
      <div>
        <label>UserName: </label>
        <input
        type="text"
        value = {loggedInUser}
        onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="res-container">
        {resList.map((res) => {
          return res.info.promoted ? (
            <RestaurantPromotion res={res} />
          ) : (
            <Restaurant res={res} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
