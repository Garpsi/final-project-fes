import React, { useState } from "react";
import Pacman from "../assets/pacman.png";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Logo from '../assets/logo.png'
import Pinky from '../assets/pinky.png'

const Header = (props) => {
  let navigate = useNavigate();
  const [genreBtn, setGenreBtn] = useState(false);
  const [input, setInput] = useState("");
  const [genreInput, setGenreInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  function goToGames(e) {
    e.preventDefault();
    navigate("/games");
  }

  const searchGenre = (e) => {
    props.onSearchGenre(genreInput)
  }

  const search = (e) => {
    props.onSearch(input);
  };

  function setGenre(e) {
    setGenreInput(e);
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
            <div className="header__top">
              <img className="header__logo" src={Logo} alt="" />
              <h1 className="header__title">Your Favourite Gaming Database</h1>
            </div>
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
              <form onSubmit={goToGames} className="search" action="">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Find your game!"
                  onChange={handleChange}
                />
                <button type="submit" className="form__btn" onClick={search}>
                  <img className="input__img" src={Pacman} alt="" />
                </button>
              </form>
            ) : (
              <form
                className="genre__options"
                onSubmit={goToGames}
                action=""
              >
                <button onClick={searchGenre}>
                  <input
                    className="genre__option"
                    type="button"
                    value="indie"
                    onClick={(e) => setGenre(e.target.value)}
                  />
                </button>
                <button onClick={searchGenre}>
                  <input
                    className="genre__option"
                    type="button"
                    value="action"
                    onClick={(e) => setGenre(e.target.value)}
                  />
                </button>
                <button onClick={searchGenre}>
                  <input
                    className="genre__option"
                    type="button"
                    value="adventure"
                    onClick={(e) => setGenre(e.target.value)}
                  />
                </button>
                <button onClick={searchGenre}>
                  <input
                    className="genre__option"
                    type="button"
                    value="shooter"
                    onClick={(e) => setGenre(e.target.value)}
                  />
                </button>
                <button onClick={searchGenre}>
                  <input
                    className="genre__option"
                    type="button"
                    value="puzzle"
                    onClick={(e) => setGenre(e.target.value)}
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
