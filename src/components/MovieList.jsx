import React from "react";
import SkeletonLoader from "./SkeletonLoader";
import { Link, useNavigate } from "react-router-dom";

function MovieList({ movies, isLoading }) {
  const navigate = useNavigate();

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="films-list">
      {movies.map((movie) => (
        <div className="film" key={movie.imdbID}>
          <img
            className="film__img"
            src={movie.Poster}
            alt={movie.Title}
            onClick={() => navigate(`/movies/${movie.imdbID}`)}
          />
            <p className="films__title" onClick={() => navigate(`/movies/${movie.imdbID}`)}>{movie.Title}</p>
          <p className="films__body">Year: {movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
