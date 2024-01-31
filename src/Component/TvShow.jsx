import React, { useEffect, useState } from "react";
import ShowDetails from "./ShowDetails";
import ShowList from "./Showlist";

const TvShow = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShows(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, []);

  const handleShowClick = (showId) => {
    const selectedShow = shows.find((show) => show.show.id === showId);
    setSelectedShow(selectedShow);
  };

  return (
    <>
      
      {selectedShow ? (
        <ShowDetails show={selectedShow.show} />
      ) : (
        <ShowList shows={shows} onShowClick={handleShowClick} />
      )}
    </>
  );
};

export default TvShow;
