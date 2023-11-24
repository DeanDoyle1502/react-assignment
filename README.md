# Assignment 1 - ReactJS app.

Name: [Dean Doyle]

## Overview.

This project involes building an movie information app using the TMDB api to pull information from 

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Feature 1
Static end points - Upcoming movies, Top rated movies and popular movies.
+ Feature 2
Parameterised endpoints - Get Movie credits by id, get actor by id, get actor credits by id 
+ Feature 3
Pagination and dark mode added
+ Feature 4
connected pages movie page displays actors, actors page displays movies which are sorted by top ten based on amount of votes 
+ Feature 5
Save favourites page for films that are already out, add to must watch page for upcoming movies.

## Setup requirements.

standerd set up

## API endpoints.
-fetchs popular movies 
`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

-fetches now playing movies 
`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

-fetches top rated movies
`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

-fetches the actors in the movies based on the movie id
`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

-fecthes the actors information based on id
`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

-fetches the actors movie credits absed on the actors id 
`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

## Routing.
            Standard routes

  <Route path="/movies/upcoming" element={<UpcomingMovies />} />
          <Route path="/movies/popular" element={<PopularMovies />} />
          <Route path="/movies/nowPlaying" element={<NowPlayingMovies />} /> 
          <Route path="/movies/topRated" element={<TopRatedMovies />} />

          --routes based on ids-- 
          
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } /> 
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/actor/:id" element={<ActorDetailsPage />} />

          --routes to specific pages--

          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/mustWatch" element={ <MustWatchPage /> } />

