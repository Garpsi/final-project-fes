import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Game from "../components/Game";
import axios from "axios";
import API_KEY from "../keys.js";

const Games = () => {
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
    <section id="games__section">
      <Header onSubmit={getGames} />
      <div className="games__body">
        {
          games.map(game => <Game game={game} key={game.id}/>).slice(0, 6)
        }
      </div>
    </section>
  );
};

export default Games;
