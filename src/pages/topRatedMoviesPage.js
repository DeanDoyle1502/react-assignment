import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api";
import { QueryClient, useQuery } from "react-query";
import Spinner from '../components/spinner';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import { json } from "react-router-dom";

const TopRatedMovies = () => {
  const { data: topRatedMovies, isLoading, isError } = useQuery('topRatedMovies', getTopRatedMovies);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <p>Error loading Top Rated movies</p>;
  }
console.log(topRatedMovies.results)
const mustWatch = topRatedMovies.results.filter(m => m.mustWatch)
localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

const addToMustWatch = (movieId) => {
  
  const updatedMustWatchMovies = topRatedMovies.results.map((m) =>
    m.id === movieId ? {...m, mustWatch: true} : m
  );
  
  setMovies(updatedMustWatchMovies);
};




  return (
    <PageTemplate
      title='Top Rated'
      movies={topRatedMovies.results}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
      
      selectMustWatch={addToMustWatch}
    />
    
  );
};
export default TopRatedMovies;