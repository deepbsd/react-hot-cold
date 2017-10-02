import {createStore} from 'redux';

// import {newGame, makeGuess} from './reducers';

import reducer from './reducers'

export default createStore(reducer);
