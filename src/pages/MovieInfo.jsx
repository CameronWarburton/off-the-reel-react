import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://omdbapi.com/?i=${id}&apikey=7f137b53`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
      setIsLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return <p>Loading movie details...</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div className="movie__details">
      <div className="movie__details--left">
        <img src={movie.Poster} alt={movie.Title} className="movie__poster" />
      </div>

      <div className="movie__details--right">
        <h1 className="movie__title">{movie.Title}</h1>
        <p className="movie__plot">{movie.Plot}</p>
        <div className="movie__text">
          <p>Year: {movie.Year}</p>
          <p>Actors: {movie.Genre}</p>
          <p>Director: {movie.Director}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Rating: {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
