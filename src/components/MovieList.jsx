import React from "react";
import SkeletonLoader from "./SkeletonLoader";

function MovieList({ movies, isLoading }) {
  if (isLoading) {
    return <SkeletonLoader />;
  }
  return (
    <div className="films-list">
      {movies.map((movie) => (
        <div className="film" key={movie.imbID}>
            <img className="film__img" src={movie.poster} alt={movie.title} />
            <p className="films__title">{movie.title}</p>
            <p className="films__body">Year: {movie.year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
