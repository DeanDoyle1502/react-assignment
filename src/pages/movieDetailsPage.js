import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getCredits } from "../api/tmdb-api";
import MovieCredits from "../components/MovieCredits";

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: cast, castError, isLoading: castIsLoading, castIsError } = useQuery(
    ["credits", { id: id }],
    getCredits
  );
  

  if (isLoading || castIsLoading) {
    return <Spinner />;
  }

  if (isError || castIsError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <MovieCredits cast={cast.cast} />
           
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;