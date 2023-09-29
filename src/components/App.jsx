import { CssBaseline } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

import Actors from "./actors/Actors";
import Profile from "./profile/Profile";
import MovieInformation from "./movieInformation/MovieInformation";
import Navbar from "./navbar/Navbar";
import Movies from "./movies/Movies";
function App() {
  return (
    <Router>
      <main className="App">
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile:id" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
