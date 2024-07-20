import React, { useState } from "react";
import "./BookingDetails.css";
import { NavLink, useParams } from "react-router-dom";

const BookingDetails = (props) => {
  const params = useParams();
  const movie = props.movies.filter(
    (movie) => movie.Title == params.movie_title
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  return (
    <div className="booking-details">
      <h1 className="booking-details-heading">
        Enter Details Below to Confirm
      </h1>
      <form action={`/${movie[0].Title}/ticket`}>
        <input
          type="text"
          name="name"
          placeholder="-- Enter Your Name(Format: Adam Smith) --"
          value={name}
          onChange={handleName}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email(Format: abc@example.com)"
          value={email}
          onChange={handleEmail}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="-- Enter Your Mobile(Format: 1234567890) --"
          value={mobile}
          onChange={handleMobile}
          minLength="10"
          pattern="[0-9]{10}"
          required
        />
        <button className="confirm" type="submit">
          Confirm Booking
        </button>
      </form>
      {/* <NavLink
        className="confirm"
        to={name && email && mobile ? "/ticket" : ""}
      >
        Confirm Booking
      </NavLink> */}
    </div>
  );
};

export default BookingDetails;
