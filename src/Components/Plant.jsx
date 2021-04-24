import React from "react";

const Plants = ({ plants }) => {
  return (
    <div className="Plants">
      <img src={plants.image_url} alt={plants.common_name} />
      <div className="info">
        <h2>{plants.common_name}</h2>
        <h3>{plants.scientific_name}</h3>
        <p>
          <span>Created by:</span> {plants.contributed_by}
        </p>
      </div>
    </div>
  );
};

export default Plants;
