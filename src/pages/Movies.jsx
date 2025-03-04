import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";

async function fetchMovies(query, setMovies, setLoading) {
  setLoading(true);
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=7f137b53`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
  setLoading(false);
}

const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "Fast";
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies(query, setMovies, setLoading);
  }, [query]);

  return (
    <div>
      <h1 className="search__title">Movie Results for<span className="blue">"{query}"</span></h1>
      <MovieList movies={movies} isLoading={isLoading} />
    </div>
  );
};

export default Movies;
