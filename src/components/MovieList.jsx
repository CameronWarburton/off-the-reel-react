import React from "react";
import SkeletonLoader from "./SkeletonLoader";
import { Link } from "react-router-dom";

function MovieList({ movies, isLoading }) {
  if (isLoading) {
    return <SkeletonLoader />;
  }
  return (
    <div className="films-list">
      {movies.map((movie) => (
        <div className="film" key={movie.imdbID}>
          <Link to={`movies/${movie.imdbID}`}>
            <img className="film__img" src={movie.Poster} alt={movie.Title} />
            </Link>
            <Link to={`movies/${movie.imdbID}`}>
            <p className="films__title">{movie.Title}</p>
            </Link>
            <p className="films__body">Year: {movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
