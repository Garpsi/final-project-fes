import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom'


const Home = ({ getGames }) => {
  let navigate = useNavigate()

  function handleSubmit() {
    navigate('/games')
    console.log('not working still')
  }


  return (
    <div className='home'>
      <img className='home__bgImg' src="https://img.freepik.com/free-vector/cartoon-nature-landscape-dirt-road-go-along-field_107791-10160.jpg?t=st=1658060466~exp=1658061066~hmac=31181eb893b534f88e9eb35d9e2353766495982b9ef13cd62d9ddf005c2fb73a&w=1380" alt="" />
      <Header onSearch={getGames} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Home;
