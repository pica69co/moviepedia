import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { searchMovie } from "../../features/currentGenorCat";
import useStyles from "./styles";

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // console.log(query);
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
