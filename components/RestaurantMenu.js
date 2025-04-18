import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constant";
import "./RestaurantMenu.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const [resmenu, setResMenu] = useState(null);
  const { resid } = useParams();
  useEffect(() => {
    async function getRestaurantMenu() {
      let response = await fetch(RES_MENU + resid);
      let data = await response.json();
      setResMenu(data);
    }
    getRestaurantMenu();
  }, []);
  const restaurantData = resmenu?.data?.cards[2]?.card?.card?.info;
  const restaurantMenu =
    resmenu?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  console.log(resmenu)
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  if (!restaurantMenu) return <h1 className="loading">LOADING</h1>;
  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-header">
        <div className="header-content">
          <div>
            <h1 className="restaurant-title">
              {restaurantData?.name}
              {restaurantData?.veg && <span className="veg-tag">Veg</span>}
            </h1>
            <p className="cuisine-list">
              {restaurantData?.cuisines.join(", ")}
            </p>
            <p className="address">
              {restaurantData?.locality}, {restaurantData?.areaName}
            </p>
          </div>
          <div className="rating-box">
            <span className="rating-value">★ {restaurantData?.avgRating}</span>
            <hr className="rating-separator" />
            <p className="rating-count">{restaurantData?.totalRatingsString}</p>
          </div>
        </div>

        <div className="delivery-info">
          <p>🕒 {restaurantData?.sla.slaString}</p>
          <p>🚴♂️ {restaurantData?.sla.lastMileTravelString}</p>
          <p>{restaurantData?.costForTwoMessage}</p>
        </div>

        {restaurantData?.aggregatedDiscountInfoV2 && (
          <div className="discount-banner">
            <h3 className="discount-header">
              {restaurantData?.aggregatedDiscountInfoV2.header}
            </h3>
            {restaurantData?.aggregatedDiscountInfoV2.shortDescriptionList.map(
              (desc, index) => (
                <p key={index} className="discount-item">
                  • {desc.meta}
                </p>
              )
            )}
          </div>
        )}
      </div>

      <div className="menu-section">
        {restaurantMenu.map((item, index) => {
          return (
              <div className="menu-item" key={index}>
                <div className="item-details">
                  <h3 className="item-name">{item?.card?.info?.name}</h3>
                  <p className="item-description">
                    {item?.card?.info?.category}
                  </p>
                  <p className="item-price">{`₹${(item?.card?.info?.defaultPrice)/100}`}</p>
                </div>
                <div className="item-image">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
                    alt="Ice Cream"
                  />
                  <button className="add-button" onClick={() => handleAddItem(item)}>ADD</button>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
