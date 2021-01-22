import React, { useState, useEffect } from "react";
import './App.css';

const Joke = (props) => {
  return (
    <div className="joke">
      <p className="setup">{props.joke.setup}</p>
      <p className="punchline">{props.joke.punchline}</p>
    </div>
  );
}

const App = () => {
  const [joke, setJoke] = useState({
    setup: ``,
    punchline: ``
  });

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(resp => resp.json())
    .then(data => setJoke(data[0]));
  }

  return (
    <div className="App">
      <Joke joke={joke} />
      <button className="btn" onClick={() => fetchJoke()}>Another one</button>
    </div>
  );
}

export default App;