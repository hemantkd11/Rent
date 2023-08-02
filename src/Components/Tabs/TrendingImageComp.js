import React from "react";

const TrendingImageComp = ({ imageUrl, productName, disc }) => {
  return (
    <div className="trending-image-container">
      <img src={imageUrl} alt={productName} />
      <h3>{productName}</h3>
      <p>{disc}</p>
    </div>
  );
};

export default TrendingImageComp;