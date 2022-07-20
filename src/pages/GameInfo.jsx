import React, { useState, useEffect } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useParams } from 'react-router-dom'
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import API_KEY from "../keys.js";
import Game from "../components/Game";
import { useNavigate } from 'react-router-dom'
import { gamesData } from '../data'

const GameInfo = () => {
  const shuffledGames = shuffleArray(gamesData)
  let navigate = useNavigate()
  const { id } = useParams()
  let bookId = id

  const [gameInfo, setGameInfo] = useState('');

  async function getGameInfo() {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${bookId}?key=${API_KEY}`
    );
    setGameInfo(data);
  }

  useEffect(() => {
    getGameInfo();
  }, [id]);

  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

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
            {
              gameInfo.description_raw ?
              gameInfo.description_raw
              :
              'No description available. Sorry!'
            }
          </div>
        </div>
        <div className="games__recommended">
          {
            shuffledGames
            .filter(game => +game.rating >= 4.0 && +game.id !== +id)
            .map(game => <Game game={game} key={game.id}/>)
            .slice(0, 3)
          }
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
