import React from 'react';
import StarIcon from "@mui/icons-material/Star";
import { Link } from 'react-router-dom'

const Game = ({ game }) => {
  return (
      <Link to={`/games/${game.id}`} className="game">
        <img
          src={game.background_image}
          alt=""
        />
        <div className="game__description">
          <h2 className="game__title">{game.name}</h2>
          <h3 className="game__release">{game.released}</h3>
          <div className="game__rating">
            <StarIcon />
            <h3>{game.rating}</h3>
          </div>
        </div>
      </Link>
  );
}

export default Game;
