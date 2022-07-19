import React from "react";
import Header from "../components/Header";
import Game from "../components/Game";


const Games = ({ getGames, games, getGenreGames, genreGames }) => {

  function renderGames() {
    if (games) {
      return games.map(game => <Game game={game} key={game.id}/>).slice(0, 6)
    } 
    <span className="no__results">Please search a title or choose a genre!</span>
  }

  function renderGenre() {
    if (genreGames) {
        return genreGames.map(game => <Game game={game} key={game.id}/>).slice(0, 6)
    }
    <span className="no__results">Please search a title or choose a genre!</span>
  }

  return (
    <section id="games__section">
      <Header onSearch={getGames} onSearchGenre={getGenreGames} />
      
      <div className="games__body">
        {
          games ? renderGames() : renderGenre()
        }
        {/* {
          games ?
          games.map(game => <Game game={game} key={game.id}/>).slice(0, 6)
          :
          <span className="no__results">Please search a title or choose a genre!</span>
        } */}
      </div>
    </section>
  );
};

export default Games;
