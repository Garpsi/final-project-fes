import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from "axios";
import API_KEY from "../keys.js";

const Home = () => {
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
    <div className='home'>
      <img className='home__bgImg' src="https://img.freepik.com/free-vector/cartoon-nature-landscape-dirt-road-go-along-field_107791-10160.jpg?t=st=1658060466~exp=1658061066~hmac=31181eb893b534f88e9eb35d9e2353766495982b9ef13cd62d9ddf005c2fb73a&w=1380" alt="" />
      <Header />
    </div>
  );
}

export default Home;
