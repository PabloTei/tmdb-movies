import React from "react";
import RatingCircle from "../Rating/RatingCircle";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="rating-circle-container">
        <RatingCircle score={movie.vote_average} maxScore={10} />
      </div>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
        }
        className="image"
        alt={movie.title}
      />
      <div className="content">
        <a href="#">
          <span className="title">
            {movie.title ? movie.title : movie.original_name}
          </span>
        </a>
        <p className="release-date">
          {movie.release_date ? movie.release_date : movie.first_air_date}
        </p>
        {/* <a className="action" href="#">
          More details
          <span aria-hidden="true">→</span>
        </a> */}
      </div>
    </div>
  );
};

export default MovieCard;
