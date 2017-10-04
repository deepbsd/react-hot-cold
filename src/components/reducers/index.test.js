import reducer from './index';
import {newGame, toggleInfoModal, makeGuess} from '../actions';

describe('makeGuess', () => {
    it('Should return the correct feedback according to the guess made', () => {
        let state = {
          guesses: [],
          feedback: 'Make your guess!',
          showInfoModal: false,
          correctAnswer: 55
        };

        let expected = 'You got it!';
        state = reducer(state, makeGuess(55));
        expect(state.feedback).toEqual(expected);

        let expected1 = "You\'re Ice Cold...";
        state = reducer(state, makeGuess(3));
        expect(state.feedback).toEqual(expected1);

        let expected2 = "You\'re Cold...";
        state = reducer(state, makeGuess(85));
        expect(state.feedback).toEqual(expected2);

        let expected3 = "You\'re Warm";
        state = reducer(state, makeGuess(65));
        expect(state.feedback).toEqual(expected3);

        let expected4 = "You\'re Hot!";
        state = reducer(state, makeGuess(60));
        expect(state.feedback).toEqual(expected4);

        let expected5 = "You\'re nearly on Fire!";
        state = reducer(state, makeGuess(56));
        expect(state.feedback).toEqual(expected5);

        let expected6 = "Please enter a valid number";
        state = reducer(state, makeGuess('wtf?'));
        expect(state.feedback).toEqual(expected6);
    });
});

describe('newGame', () => {
  it('Should zero out existing state values when a new game starts', () => {
    let state = {
      guesses: [55,44,77,11,89],
      feedback: 'Hey Rocky! Do these antlers make my head look fat?',
      showInfoModal: null
    }
    state = reducer(state, newGame());
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.showInfoModal).toEqual(false);
  });
});

describe('toggleInfoModal', () => {
  it('Should reverse the truthiness of previous state', () => {
    let state = {
      guesses: [],
      feedback: 'olly olly oxenfree',
      showInfoModal: true
    }
    let expected = !state.showInfoModal;
    state = reducer(state, toggleInfoModal());
    expect(state.showInfoModal).toEqual(expected);
  });
});
