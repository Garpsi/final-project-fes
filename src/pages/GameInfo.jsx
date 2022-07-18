import React, { useState, useEffect } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useParams } from 'react-router-dom'
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import API_KEY from "../keys.js";
import Game from "../components/Game";
import { useNavigate } from 'react-router-dom'

const GameInfo = ({ games }) => {
  let navigate = useNavigate()
  const { id } = useParams()
  let bookId = id

  const [gameInfo, setGameInfo] = useState('');

  async function getGameInfo() {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${bookId}?key=${API_KEY}`
    );
    setGameInfo(data);
    console.log(gameInfo)
    console.log(bookId)
  }

  useEffect(() => {
    getGameInfo();
  }, []);

  return (
    <div id="gamesInfo__section">
      <div className="info__row">
        <button onClick={() => navigate('/games')} className="game__selected--btn">
          <ArrowCircleLeftIcon />
        </button>
        <div className="game__selected">
          <div className="gameInfo--top">
            <figure className="game__selected--fig">
              <img src={gameInfo.background_image} alt="" className="game__selected--img" />
            </figure>
            <div className="game__selected--description">
              <div className="game__selected--title">
                <h1>{gameInfo.name}</h1>
              </div>
              <div className="game__selected--rating">
                <StarIcon />
                <h3>{gameInfo.rating}</h3>
              </div>
              <div className="release__data">
                <h2>Release Date: {gameInfo.released}</h2>
              </div>
              <div className="game__website">
                <h3>Visit their Website: </h3> 
                <a href={gameInfo.website} target='_blank'>
                  <h3>{gameInfo.website}</h3>
                </a>
              </div>
            </div>
          </div>
          <div className="game__selected--summary">
            {gameInfo.description_raw}
          </div>
        </div>
        <div className="recommended__games">
          {
            games
            .filter(game => +game.rating >= 4.5)
            .map(game => <Game game={game} key={game.id}/>)
            .slice(3)
          }
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
