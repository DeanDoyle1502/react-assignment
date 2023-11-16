import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MovieCredits = ({ cast }) => {
  return (
    <div>
      <h2>Cast</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cast.map((castMember) => (
          <Link
            to={`/actor/${castMember.name}`}
            key={castMember.id}
            style={{ textDecoration: "none" }}
          >
            <Card style={{ maxWidth: 200, margin: 10 }}>
              <CardMedia
                component="img"
                height="200"
                image={`https://image.tmdb.org/t/p/w500/${castMember.profile_path}`}
                alt={castMember.name}
              />
              <CardContent>
                <Typography variant="h6" component="p">
                  {castMember.name}
                </Typography>
                <Typography variant="body2" component="p">
                  Character: {castMember.character}
                </Typography>
                <Typography variant="body2" component="p">
                  Gender: {castMember.gender === 2 ? "Male" : "Female"}
                </Typography>
                <Typography variant="body2" component="p">
                  Known for Department: {castMember.known_for_department}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieCredits;