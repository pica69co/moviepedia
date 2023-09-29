import { CssBaseline } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Actors from "./actors/Actors";
import Profile from "./profile/Profile";
import MovieInformation from "./movieInformation/MovieInformation";
import Navbar from "./navbar/Navbar";
import Movies from "./movies/Movies";

import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile:id" element={<Profile />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
