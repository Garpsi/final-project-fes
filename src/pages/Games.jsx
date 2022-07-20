import React, { useEffect } from "react";
import Header from "../components/Header";
import Game from "../components/Game";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';


const Games = ({ getGames, games, getGenreGames, genreGames, loading }) => {

  // const NewComponent = renderGenre()

  // games.map(game => <Game game={game} key={game.id}/>).slice(0, 6)

  function DisplayGames() {
    if (games.length === 0 && genreGames.length === 0) {
      return <span className="no__results">Please search a title that exists or choose a genre!</span>
    }
    if (genreGames.length !== 0) {
      return genreGames.slice().map(game => <Game game={game} key={game.id}/>).slice(0, 6)
    }
    return games.slice().map(game => <Game game={game} key={game.id}/>).slice(0, 6)
    }

  useEffect(() => {
    DisplayGames()
  }, [games, genreGames])

  return (
    <section id="games__section">
      <Header onSearch={getGames} onSearchGenre={getGenreGames} />
      
      <div className="games__body">
        {
          loading ? <HourglassBottomIcon className="loading__img" /> : <DisplayGames />
        }
        {/* {
          games.length === 0 && genreGames.length === 0 ? 
          <span className="no__results">Please search a title that exists or choose a genre!</span>
          : <RenderGenre />
        } */}
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
