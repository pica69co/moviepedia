import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import Movie from "../Movie/Movie";

const Movielist = ({ movies, numberOfMovies, excludeFirst }) => {
  // console.log("Movielist");
  const classes = useStyles();

  const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie movie={movie} i={i} key={i} />
      ))}
    </Grid>
  );
};

export default Movielist;
