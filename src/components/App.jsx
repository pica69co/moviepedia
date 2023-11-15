import { CssBaseline } from "@mui/material";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Movies/Movies";
import MovieInformation from "./MovieInformation/MovieInformation";
import Movies from "./Movies/Movies";
import Actors from "./Actors/Actors";
import Profile from "./Profile/Profile";
import NavBar from "./NavBar/NavBar";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <>
              <Route path="/" element={<Movies />} />
              <Route path="/approved?" element={<Movies />} />
              <Route path="/movie/:id" element={<MovieInformation />} />
              <Route path="/actor/:id" element={<Actors />} />
              <Route path="/profile/:id" element={<Profile />} />
            </>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
