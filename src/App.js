import { useState } from 'react';
import './App.css';
import CardDeck from './components/CardDeck';
import Header from './components/Header';
import DATA from './shared/data';

function App() {
  // MovieFeedEntries Movie Media where SubType === TV_SmallPosterImage
  const [movies, setMovies] = useState(null);

  if (!movies) {
    setMovies(DATA.MovieFeedEntries);
  }
  return (
    <div className="App">
      <Header />
      {movies ? <CardDeck movies={movies} /> : 'Loading....'}
    </div>
  );
}

export default App;
