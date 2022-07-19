import React from "react";
import Header from "../components/Header";
import Game from "../components/Game";


const Games = ({ getGames, games }) => {

  return (
    <section id="games__section">
      <Header onSearch={getGames} />
      
      <div className="games__body">
        {
          games ?
          games.map(game => <Game game={game} key={game.id}/>).slice(0, 6)
          :
          <span className="no__results">Please search a title or choose a genre!</span>
        }
      </div>
    </section>
  );
};

export default Games;
