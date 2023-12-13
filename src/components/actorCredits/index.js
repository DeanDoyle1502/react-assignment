import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ActorCredits = ({ actorCredits }) => {
    console.log(actorCredits)
    return (
        <div>
      <h2>Actor Credits</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {actorCredits.cast.sort((a, b) => b.vote_count-a.vote_count).slice(0, 10).map((movie) => {
            
            const movieImageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "src/images/film-poster-placeholder.png" 
            return (
                <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                style={{ textDecoration: "none" }}
              >
                <Card style={{ maxWidth: 200, margin: 10 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={movieImageUrl}
                    alt={movie.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="p">
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Release Date: {movie.release_date}
                    </Typography>
                    
                  </CardContent>
                </Card>
              </Link>
            )
         
        })}
      </div>
    </div>
  );
};

export default ActorCredits;