import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = (props) => {
  const params = useParams();
  const movie = props.movies.filter(
    (movie) => movie.Title == params.movie_title
  );

  return (
    <>
      <div className="movie-booking-container">
        <img src={movie[0].Img} alt="" className="movie-details-img" />
        <div className="movie-book">
          <h1 className="title">{movie[0].Title}</h1>
          <h2 className="genre">Genres: {movie[0].Type}</h2>
          <h3>
            Rating: <span>{movie[0].Rating}</span>
          </h3>
          <h3>
            About: <br /> &emsp;&emsp; <span>{movie[0].About}</span>
          </h3>
          <h3>
            Duration: <span>{movie[0].Duration}</span>
          </h3>
          <h3>
            Release Date: <span>{movie[0].Release}</span>
          </h3>
          <h3>
            Available in: <span>{movie[0].Languages}</span>
          </h3>
          <h3>
            Visuals: <span>{movie[0].Visuals}</span>
          </h3>
          <NavLink to={`/${movie[0].Title}/book`} className="book-seat">
            Book Seat
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
