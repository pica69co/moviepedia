import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useGetMoviesQuery } from "../../services/TMDB";
import { selectGenreOrCategory } from "../../features/currentGenorCat";
import { useSelector } from "react-redux";
import Movielist from "../MovieList/Movielist";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching, isLoading } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  if (isFetching) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match your query.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }
  if (error) return <div>An error has occurred</div>;
  return (
    <div>
      <Movielist movies={data} />
    </div>
  );
};

export default Movies;
