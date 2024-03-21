import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import ScoreKeeper_duo from "./ScoreKeeper_duo";
import EmojiClicker from "./EmojiClicker";
import ScoreKeeper from "./ScoreKeeper";

function App() {
  return (
    <>
      {/* <h1>State Demo</h1>
      <Counter />
      <Dumbo />
      <ScoreKeeper_duo />
      <EmojiClicker /> */}
      <ScoreKeeper numPlayers={10} target={3} />
    </>
  );
}

export default App;
