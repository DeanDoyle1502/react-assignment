import React, { useState} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMovies from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustWatchPage from "./pages/mustWatchPage";
import PopularMovies from "./pages/popularMoviesPage";
import NowPlayingMovies from "./pages/nowPlayingPage";
import TopRatedMovies from "./pages/topRatedMoviesPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {

  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', 
      primary: {
        main: '#90caf9',
        
      },
      secondary: {
        main: '#5aafd1',

      },

    },
  });
  return (

    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', paddingLeft: 20 }}>
        <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control= {<Switch checked={toggleDarkMode} onChange={toggleDarkTheme}  />}
          label="Dark mode"
          labelPlacement="end"
        />
        </FormGroup>
        </FormControl>
        </div>
        <MoviesContextProvider>
        <Routes>
          <Route path="/movies/upcoming" element={<UpcomingMovies />} />
          <Route path="/movies/popular" element={<PopularMovies />} />
          <Route path="/movies/nowPlaying" element={<NowPlayingMovies />} /> 
          <Route path="/movies/topRated" element={<TopRatedMovies />} /> 
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/actor/:id" element={<ActorDetailsPage />} />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/mustWatch" element={ <MustWatchPage /> } />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </ThemeProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);