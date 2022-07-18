import React from "react";
import Header from "../components/Header";
import Game from "../components/Game";


const Games = ({ getGames, games }) => {

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
