import { useState } from "react";
import "./PlayerScore.css";

function PlayerScore({ target, index, score }) {
  const [points, setPoints] = useState(score);
  function addPoint(){
    (setPoints(currPoints => currPoints+1));
  }
  return (
    <li>
      <div className="playerScore">
        Player{index} Score: <span className="score">{points}</span>
        <button onClick={addPoint}>+1</button>
        {points >= target ? <span className="winner">WINNER!</span> : null}
      </div>
    </li>
  );
}

export default PlayerScore;
