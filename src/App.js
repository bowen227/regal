import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DATA from './shared/data';
import Home from './pages/Home';
import Details from './pages/Details';
import ScrollToTop from './wrappers/ScrollToTop';

function App() {
  // MovieFeedEntries Movie Media where SubType === TV_SmallPosterImage
  const [movies, setMovies] = useState(null);

  if (!movies) {
    setMovies(DATA.MovieFeedEntries);
  }

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          {movies ? movies.map(m => <Route key={m.Movie.Title} path={m.Movie.Title.split(' ').join('-').split(':').join('')} element={<Details movie={m.Movie} />} />) : null}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
