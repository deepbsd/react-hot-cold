import {createStore} from 'redux';

// import {newGame, makeGuess} from './components/reducers';

import reducer from './components/reducers'

export default createStore(reducer);
