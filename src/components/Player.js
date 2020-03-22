import React, { useState } from 'react';

const Player = () => {
  const [name, setName] = useState('');
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  let [score, setScore] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    setName(name);
    setGuess(guess);
    setResult(result);
    setScore(
      guess === result && guess === '0'
        ? (score += 20)
        : guess === result && guess === '1'
        ? (score += 30)
        : guess === result && guess === '2'
        ? (score += 40)
        : guess === result && guess === '3'
        ? (score += 50)
        : guess === result && guess === '4'
        ? (score += 60)
        : guess === result && guess === '5'
        ? (score += 70)
        : guess === result && guess === '6'
        ? (score += 80)
        : guess === result && guess === '7'
        ? (score += 90)
        : (guess !== result && guess - result === 1) || result - guess === 1
        ? (score -= 10)
        : (guess !== result && guess - result === 2) || result - guess === 2
        ? (score -= 20)
        : (guess !== result && guess - result === 3) || result - guess === 3
        ? (score -= 30)
        : (guess !== result && guess - result === 4) || result - guess === 4
        ? (score -= 40)
        : (guess !== result && guess - result === 5) || result - guess === 5
        ? (score -= 50)
        : (guess !== result && guess - result === 6) || result - guess === 6
        ? (score -= 60)
        : (guess !== result && guess - result === 7) || result - guess === 7
        ? (score -= 70)
        : 0
    );

    console.log(name, guess, result, score, 'this is the name in the state now');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Player Name</label>
        <input
          className="input-text"
          value={name}
          id="name"
          name="name"
          onChange={e => setName(e.target.value)}
          type="text"
        />
        <input className="input-text" value={guess} onChange={e => setGuess(e.target.value)} type="text" />
        <input className="input-text" value={result} onChange={e => setResult(e.target.value)} type="text" />
        <button type="submit">Submit</button>
      </form>
      <p>{name}</p>
      <p>{guess}</p>
      <p>{result}</p>
      <p>{score}</p>
    </div>
  );
};

export default Player;
