// reducers.js
const initialState = {
    secretNumber: Math.floor(Math.random() * 101),
    guess: null,
    message: '',
  };
  
  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_GUESS':
        const newGuess = action.payload;
        let newMessage = '';
  
        if (newGuess < state.secretNumber) {
          newMessage = 'Не правильно, берите выше';
        } else if (newGuess > state.secretNumber) {
          newMessage = 'Не правильно, берите ниже';
        } else {
          newMessage = 'Поздравляем, вы отгадали число!';
        }
  
        return {
          ...state,
          guess: newGuess,
          message: newMessage,
        };
  
      case 'RESET_GAME':
        return initialState;
  
      default:
        return state;
    }
  };
  
  export default gameReducer;
  