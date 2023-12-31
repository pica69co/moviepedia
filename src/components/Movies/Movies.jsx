import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";

import { useGetMoviesQuery } from "../../services/TMDB";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";
import Movielist from "../MovieList/Movielist";
import Pagination from "../Pagination/Pagination";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));

  const numberOfMovies = lg ? 17 : 19;

  if (isFetching || error) {
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
      <FeaturedMovie movie={data.results[0]} />
      <Movielist movies={data} numberOfMovies={numberOfMovies} excludeFirst />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Movies;
