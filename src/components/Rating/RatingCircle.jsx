import React from "react";
import "./RatingCircle.css";

const RatingCircle = ({ score, maxScore }) => {
  const calculateFillPercentage = () => {
    const percentage = (score / maxScore) * 100;

    if (percentage <= 49) {
      return { percentage, color: "#ff0000" }; // Rojo
    } else if (percentage <= 69) {
      return { percentage, color: "#ffc107" }; // Amarillo
    } else {
      return { percentage, color: "#4caf50" }; // Verde
    }
  };

  const { percentage, color } = calculateFillPercentage();

  return (
    <div className="rating-circle">
      <div
        className="fill"
        style={{
          background: `conic-gradient(${color} 0% ${percentage}%, #dddddd ${percentage}% 100%)`,
        }}
      >
        {percentage === 0 ? (
          <span className="percentage">NR</span>
        ) : (
          <span className="percentage">{Math.round(percentage)}</span>
        )}
      </div>
    </div>
  );
};

export default RatingCircle;
