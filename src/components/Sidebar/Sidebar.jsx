import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useGetGenresQuery } from "../../services/TMDB";
import { selectGenreOrCategory } from "../../features/currentGenorCat";
import genreIcons from "../../assets/genres";
import useStyles from "./styles";
import redLogo from "../../assets/images/redlogo.png";
import blueLogo from "../../assets/images/blueLogo.png";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top rated" },
  { label: "Upcoming", value: "upcoming" },
];

// const redLogo =
// "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";

// const blueLogo =
// "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, isFetching } = useGetGenresQuery();
  // console.log(genreIdOrCategoryName);
  useEffect(() => {
    setMobileOpen(false);
  }, [genreIdOrCategoryName]);

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? blueLogo : redLogo}
          alt="Filmpire logo"
        />
      </Link>

      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} title={value} to="/">
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(value))}
              button
            >
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} title={name} to="/">
              <ListItem
                onClick={() => dispatch(selectGenreOrCategory(id))}
                button
              >
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genreImage}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
        <Link
          to="https://my-portfolio-swart-psi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5
            style={{
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "bold",
              color: "Chocolate",
            }}
            title="Oscar Arrieta"
          >
            {`{OA}`} &copy; 2023
          </h5>{" "}
        </Link>
      </List>
    </>
  );
};

export default Sidebar;
