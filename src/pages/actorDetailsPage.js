import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getActorById, getActorMovieCreditsById } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getCredits } from "../api/tmdb-api";
import MovieCredits from "../components/MovieCredits";
import ActorDetails from "../components/actorDetails";
import ActorCredits from "../components/actorCredits";

const ActorDetailsPage = (props) => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActorById
  );

  const { data: actorCredits, error: actorCreditsError, isLoading: actorCreditsIsLoading, isError: actorCreditsIsError } = useQuery(
    ["actorCredits", { id: id }],
    getActorMovieCreditsById
  );
  console.log(actor)
  

  if (isLoading || actorCreditsIsLoading) {
    return <Spinner />;
  }

  if (isError || actorCreditsIsError ) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          
           
             <ActorDetails actor={actor} />
             <ActorCredits actorCredits={actorCredits} />
             
           
          
        </>
      ) : (
        <p>Waiting for Actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;