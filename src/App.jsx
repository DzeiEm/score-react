import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChalllenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Easy' targetTime={1} />
        <TimerChallenge title='Not easy' targetTime={2} />
        <TimerChallenge title='Getting tough' targetTime={3} />
        <TimerChallenge title='Pros only' targetTime={4} />
      </div>
    </>
  );
}

export default App;
