import React, { useRef, useState } from "react";
import Pacman from "../assets/pacman.png";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Header = (props) => {
  let navigate = useNavigate();
  // const searchRef = useRef(null)
  // const location = useLocation()
  // const goal = location.state.id
  const [genreBtn, setGenreBtn] = useState(false);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // function handleSubmit() {
  //   navigate('/games',
  //   {
  //     state:{
  //       id: searchRef.current.value
  //     }
  //   }
  //   )
  // }

    function handleSubmit() {
    navigate('/games')
    console.log('not working still')
  }

  const search = (e) => {
    e.preventDefault();
    props.onSearch(input);
  };

  function handleGenre(e) {
    console.log(e.target.value);
  }

  const changeGenre = () => {
    setGenreBtn(true);
  };
  const changeName = () => {
    setGenreBtn(false);
  };

  return (
    <header>
      <div className="header__container">
        <div className="header__row">
          <div className="header__description">
            <h1 className="header__title">Your Favourite Gaming Database</h1>
            <div className="header__btns">
              <button onClick={() => changeName()} className="header__btn">
                Name
              </button>
              <button onClick={() => navigate("/")} className="home__btn">
                <HomeIcon />
              </button>
              <button onClick={() => changeGenre()} className="header__btn">
                Genre
              </button>
            </div>
            {!genreBtn ? (
              <form 
              onSubmit={handleSubmit} 
              className="search" action="">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Find your game!"
                  onChange={handleChange}
                  // ref = {searchRef}
                />
                <button type="submit" className="form__btn" onClick={search}>
                  <img className="input__img" src={Pacman} alt="" />
                </button>
              </form>
            ) : (
              <div
                className="genre__options"
                onClick={(e) => this.handleGenre(e, "value")}
              >
                <button value="Singleplayer" className="genre__option">
                  Singleplayer
                </button>
                <button value="Multiplayer" className="genre__option">
                  Multipayer
                </button>
                <button value="Adventure" className="genre__option">
                  Adventure
                </button>
                <button value="Shooter" className="genre__option">
                  Shooter
                </button>
                <button value="Puzzle" className="genre__option">
                  Puzzle
                </button>
                <button value="RPG" className="genre__option">
                  RPG
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
