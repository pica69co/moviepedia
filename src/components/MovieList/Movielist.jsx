import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./styles";
// import { link } from "react-router-dom";
import Movie from "../Movie/Movie";

const Movielist = ({ movies }) => {
  console.log("Movielist");
  const classes = useStyles();
  return (
    <Grid className={classes.moviesContainer}>
      {movies?.results?.map((movie, i) => (
        <Movie movie={movie} i={i} key={i} />
      ))}
    </Grid>
  );
};

export default Movielist;
