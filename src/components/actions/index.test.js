import {NEW_GAME, MAKE_GUESS,
  TOGGLE_INFO_MODAL, newGame,
  makeGuess, toggleInfoModal} from './index';

  describe('makeGuess', () => {
      it('Should return the action', () => {
          const guess = 45;
          const action = makeGuess(guess);
          expect(action.type).toEqual(MAKE_GUESS);
          expect(action.guess).toEqual(guess);
      });
  });

  describe('newGame', () => {
      it('Should return an integer between 1 and 100', () => {
          const action = newGame();
          expect(action.correctAnswer).toBeGreaterThanOrEqual(1);
          expect(action.correctAnswer).toBeLessThanOrEqual(100);
          expect(action.type).toBe(NEW_GAME);
      });
  });

  describe('toggleInfoModal', () => {
      it('Toggle the truthiness of showInfoModal', () => {
          const action = toggleInfoModal();
          expect(action.type).toBe(TOGGLE_INFO_MODAL);
      });
  });
