import React from "react";
import { useNavigate } from "react-router-dom";

const ShowDetails = ({ show }) => {
  const navigate = useNavigate();
  const handleBookTicketClick = () => {
    alert("Coming Soon!");
    navigate("/booking");
  };
  return (
    <div className="show-details-container">
      <h3>{show.name}</h3>
      <p>{show.summary ? show.summary : "Summary not available"}</p>
      <button onClick={handleBookTicketClick}>Book Ticket</button>
    </div>
  );
};

export default ShowDetails;
