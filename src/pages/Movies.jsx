import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import featuredMovies  from "../featuredMovies";

const fetchMovies = async (query, setMovies, setLoading) => {
  if (!query) {
    setMovies(featuredMovies);
    return;
  }

  setLoading(true);
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=7f137b53`
    );
    const data = await response.json();
    const movieResults = data.Search ? data.Search.slice(0, 6) : [];
    setMovies(movieResults);
  } catch (error) {
    console.error("Error fetching movies:", error);
    setMovies([]);
  }
  setLoading(false);
}

const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies(query, setMovies, setLoading);
  }, [query]);

  return (
    <div>
      <SearchBar />
      <h1 className="search__title">Movie Results for<span className="blue">"{query}"</span></h1>
      <MovieList movies={movies} isLoading={isLoading} />
    </div>
  );
};

export default Movies;
