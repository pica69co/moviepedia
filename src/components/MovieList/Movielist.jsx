import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import Movie from "../Movie/Movie";

const Movielist = ({ movies, numberOfMovies }) => {
  // console.log("Movielist");
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results?.slice(0, numberOfMovies).map((movie, i) => (
        <Movie movie={movie} i={i} key={i} />
      ))}
    </Grid>
  );
};

export default Movielist;
