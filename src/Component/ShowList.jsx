import React from "react";
import "../styles/TvShow.css";
const ShowList = ({ shows, onShowClick }) => {
  return (
    <>
      <h2 className="heading">Fetching Data</h2>
      <div className="show-list-container">
        {shows.map((show) => (
          <div key={show.show.id} className="show-item">
            <h3>{show.show.name}</h3>

            <button onClick={() => onShowClick(show.show.id)}>
              Show Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowList;
