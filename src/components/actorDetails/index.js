import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ActorDetails = ({ actor }) => {
 
  return (
    <div>
      <h2>Cast</h2>
       <Card style={{ maxWidth: 1000, margin: 10 }}>
              <CardMedia
                component="img"
                height="400"
                image={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
              />
              <CardContent>
                <Typography variant="h6" component="p">
                  {actor.name}
                </Typography>
                <Typography variant="body2" component="p">
                  Birthday: {actor.birthday}
                </Typography>
                <Typography variant="body2" component="p">
                  Gender: {actor.gender === 2 ? "Male" : "Female"}
                </Typography>
                <Typography variant="body2" component="p">
                  Known for Department: {actor.known_for_department}
                </Typography>
                <Typography variant="body2" component="p">
                  Biography: {actor.biography}
                </Typography>
              </CardContent>
            </Card>
    </div>
  );
};

export default ActorDetails;