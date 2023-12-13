import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getPopularMovies } from "../api/tmdb-api";
import { QueryClient, useQuery } from "react-query";
import Spinner from '../components/spinner';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import { json } from "react-router-dom";

const PopularMovies = () => {
  const { data: popularMovies, isLoading, isError } = useQuery('popularMovies', getPopularMovies);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <p>Error loading Popular movies</p>;
  }
console.log(popularMovies.results)
const mustWatch = popularMovies.results.filter(m => m.mustWatch)
localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

const addToMustWatch = (movieId) => {
  
  const updatedMustWatchMovies = popularMovies.results.map((m) =>
    m.id === movieId ? {...m, mustWatch: true} : m
  );
  
  setMovies(updatedMustWatchMovies);
};




  return (
    <PageTemplate
      title='Popular Movies'
      movies={popularMovies.results}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
      
      selectMustWatch={addToMustWatch}
    />
    
  );
};
export default PopularMovies;