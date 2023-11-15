import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getNowPlayingMovies } from "../api/tmdb-api";
import { QueryClient, useQuery } from "react-query";
import Spinner from '../components/spinner';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import { json } from "react-router-dom";

const NowPlayingMovies = () => {
  const { data: nowPlaying, isLoading, isError } = useQuery('nowPlayingMovies', getNowPlayingMovies);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <p>Error loading Now Playing movies</p>;
  }
console.log(nowPlaying.results)
const mustWatch = nowPlaying.results.filter(m => m.mustWatch)
localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

const addToMustWatch = (movieId) => {
  
  const updatedMustWatchMovies = nowPlaying.results.map((m) =>
    m.id === movieId ? {...m, mustWatch: true} : m
  );
  
  setMovies(updatedMustWatchMovies);
};




  return (
    <PageTemplate
      title='Now Playing'
      movies={nowPlaying.results}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
      
      selectMustWatch={addToMustWatch}
    />
    
  );
};
export default NowPlayingMovies;