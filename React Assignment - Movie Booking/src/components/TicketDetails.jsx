import React from "react";
import { useParams } from "react-router-dom";
import "./TicketDetails.css";
import Tick from "../assets/tick.png";

const TicketDetails = (props) => {
  const params = useParams();
  const movie = props.movies.filter(
    (movie) => movie.Title === params.movie_title
  );

  const currentDate = new Date().toLocaleDateString();
  const bookingId = Math.floor(Math.random() * 1000) + 1;

  return (
    <>
      <div className="ticket-details-container">
        <p className="booking-date">Date: {currentDate}</p>
        <p className="booking-id">Booking ID: {bookingId}</p>
        <div className="tick-container">
          <img src={Tick} alt="" className="tick-png" />
          <h2 className="tick-heading">Ticket Confirmed</h2>
        </div>
        <div className="ticket-details-img-container">
          <img src={`/${movie[0].Img}`} alt="" className="ticket-details-img" />
          <div className="ticket-details">
            <h1 className="ticket-details-heading">{movie[0].Title}</h1>
            <h2 className="ticket-details-name">
              Booked By: <span>{props.name}</span>
            </h2>
            <h3 className="ticket-details-contact">
              Email: <span>{props.email}</span>
            </h3>
            <h3 className="ticket-details-contact">
              Mobile: <span>{props.mobile}</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetails;
