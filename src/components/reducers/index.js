import {MAKE_GUESS, NEW_GAME} from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const newGame = state => {
  return Object.assign({}, state, {
    state = initialState;
  })
}

export const makeGuess = (state, action) => {
  state = state || initialState;
  if (action.type === MAKE_GUESS){
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
        state = Object.assign({}, state, {
          feedback: 'Please enter a valid number'
        });
        return state;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
        feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    }
    else {
        feedback = 'You got it!';
    }

    state = Object.assign({}, state, {
      feedback,
      guesses: state.guesses.concat(action.guess)
    });
    return state;
  }
  return state;

})
