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

  async function getGames(input) {
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


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home getGames={getGames}/>} />
          <Route exact path='/games' element={<Games games={games} getGames={getGames}/>} />
          <Route exact path='/games/:id' element={<GameInfo games={games}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
