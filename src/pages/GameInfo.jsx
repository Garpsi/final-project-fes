import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const GameInfo = () => {
  return (
    <div id="games__section">
      <div className="info__row">
        <div className="game__selected--top">
          <ArrowCircleLeftIcon />
        </div>
        <div className="game__selected">
          <figure>
            <img src="" alt="" className="game__selected--img" />
          </figure>
          <div className="game__selected--description">
            <div className="game__selected--title">

            </div>
            <div className="game__selected--rating">

            </div>
            <div className="game__selected--summary">

            </div>
          </div>
        </div>
        <div className="recommended__games">
          
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
