import './App.css';
import Home from './pages/Home';
import Games from './pages/Games'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import GameInfo from './pages/GameInfo';
import axios from "axios";
import API_KEY from "./keys.js";
import { useEffect, useState } from 'react';

function App() {
  const [games, setGames] = useState([]);
  const [genreGames, setGenreGames] = useState([]);
  const [loading, setLoading] = useState(false)

  async function getGames(input) {
    setLoading(true)
    setGenreGames([])
    if (input === undefined) {
      return
    }
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${input}`
      );
      const results = data.results;
      setGames(results);
      setLoading(false)
      console.log(games)
  }

  useEffect(() => {
    setTimeout(() => {
      getGames();
    }, 1000)
  }, []);

  async function getGenreGames(genreInput) {
    setLoading(true)
    setGames([])
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genreInput}`
      );
      const results = data.results;
      setGenreGames(results);
      setLoading(false)
      console.log(genreGames)
  }

  useEffect(() => {
    setTimeout(() => {
      getGenreGames();
    }, 1000)
  }, []);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home getGames={getGames} getGenreGames={getGenreGames} />} />
          <Route exact path='/games' element={<Games games={games} getGames={getGames} getGenreGames={getGenreGames} genreGames={genreGames} loading={loading}/>} />
          <Route exact path='/games/:id' element={<GameInfo games={games} genreGames={genreGames}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
