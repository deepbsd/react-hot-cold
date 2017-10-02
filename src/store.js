import {createStore} from 'redux';

import {newGame, guess} from 'components/game';

export default createStore(newGame, guess);
