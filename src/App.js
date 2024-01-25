// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGuess, resetGame } from './Actions/actions';

const App = () => {
  const dispatch = useDispatch();
  const { guess, message } = useSelector((state) => state);

  const handleGuessChange = (e) => {
    const newGuess = parseInt(e.target.value, 10);
    dispatch(setGuess(newGuess));
  };

  const handleResetGame = () => {
    dispatch(resetGame());
  };

  return (
    <div>
      <h1>Игра "Угадай число"</h1>
      <input
        type="number"
        value={guess !== null ? guess : ''}
        onChange={handleGuessChange}
      />
      <p>{message}</p>
      {message.includes('Поздравляем') && (
        <button onClick={handleResetGame}>Заново</button>
      )}
    </div>
  );
};

export default App;
