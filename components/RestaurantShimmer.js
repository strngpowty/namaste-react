const RestaurantShimmer = () => {
    return (
        <div className="shimmer-container">
            {[...Array(6)].map((_, index) => (
                <div key={index} className="res-card shimmer-card">
                    <div className="shimmer-img"></div>
                    <div className="shimmer-text name"></div>
                    <div className="shimmer-text cuisines"></div>
                    <div className="shimmer-text rating"></div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantShimmer;