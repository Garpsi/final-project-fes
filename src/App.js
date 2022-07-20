import './App.css';
import Home from './pages/Home';
import Games from './pages/Games'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GameInfo from './pages/GameInfo';
import axios from "axios";
import API_KEY from "./keys.js";
import { useEffect, useState } from 'react';

function App() {
  const [games, setGames] = useState([]);
  const [genreGames, setGenreGames] = useState([]);

  async function getGames(input) {
    setGenreGames([])
    if (input === undefined) {
      return
    }
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${input}`
      );
      const results = data.results;
      setGames(results);
      console.log(games)
  }

  useEffect(() => {
    getGames();
  }, []);

  async function getGenreGames(genreInput) {
    setGames([])
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genreInput}`
      );
      const results = data.results;
      setGenreGames(results);
      console.log(genreGames)
  }

  useEffect(() => {
    getGenreGames();
  }, []);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home getGames={getGames} getGenreGames={getGenreGames} />} />
          <Route exact path='/games' element={<Games games={games} getGames={getGames} getGenreGames={getGenreGames} genreGames={genreGames} />} />
          <Route exact path='/games/:id' element={<GameInfo games={games} genreGames={genreGames}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
