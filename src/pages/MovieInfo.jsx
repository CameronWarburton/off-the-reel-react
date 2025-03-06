import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

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
    return <p>Loading movie details...</p>
  }

  if (!movie) {
    return <p>Movie not found.</p>
   }

  return (
    <div>MovieInfo</div>
  )
}

export default MovieInfo