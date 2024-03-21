import { useState } from "react";
import PlayerScore from "./PlayerScore";

function ScoreKeeper({ numPlayers = 4, target = 10 }) {
  const playerArray = Array(numPlayers).fill(0);
  const [scores, setScores] = useState(playerArray);
  console.log(playerArray);
  console.log({ numPlayers, target });
  function resetGame() {
    window.location.reload()
  }
  return (
    <div className="scoreBoard">
      <ul>
        {playerArray.map((item, index) => (
          <PlayerScore key={index} index={index} target={target} score={item} />
        ))}
      </ul>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default ScoreKeeper;
