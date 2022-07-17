import React, { useState } from 'react';
import Pacman from "../assets/pacman.png";

const Header = (props) => {
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const search = (e) => {
    e.preventDefault()
    props.onSubmit(input)
  }

  return (
      <header>
        <div className="header__container">
          <div className="header__row">
            <div className="header__description">
              <h1 className='header__title'>Your Favourite Gaming Database</h1>
              <form className="search" action="">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Find your game!"
                  onChange={handleChange}
                />
                <button className="form__btn" onClick={search}>
                  <img className="input__img" src={Pacman} alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;