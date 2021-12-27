import React from "react";

const ResultsCard = ({ errorStatus, disease, confidence }) => {
  if (errorStatus) {
    return (
      <div>
        <h3>try again laters</h3>
      </div>
    );
  }
  return (
    <div>
      {console.log(disease)}
      <h3>{disease}</h3>
      <h3>{confidence}</h3>
    </div>
  );
};

export default ResultsCard;
