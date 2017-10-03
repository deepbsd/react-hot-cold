import React from 'react';
import './game.css';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
// import {makeGuess, newGame, toggleInfoModal} from './actions';

//export default class Game extends React.Component {
export default function Game(props){
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         guesses: [],
    //         feedback: 'Make your guess!',
    //         correctAnswer: Math.floor(Math.random() * 100) + 1,
    //     };
    // }

    // newGame() {
    //     this.setState({
    //         guesses: [],
    //         feedback: 'Make your guess!',
    //         correctAnswer: Math.floor(Math.random() * 100) + 1,
    //     });
    // }

    // guess(guess) {
    //     guess = parseInt(guess, 10);
    //     if (isNaN(guess)) {
    //         this.setState({
    //             feedback: 'Please enter a valid number'
    //         });
    //         return;
    //     }
    //
    //     const difference = Math.abs(guess - this.state.correctAnswer);
    //
    //     let feedback;
    //     if (difference >= 50) {
    //         feedback = 'You\'re Ice Cold...';
    //     }
    //     else if (difference >= 30) {
    //         feedback = 'You\'re Cold...';
    //     }
    //     else if (difference >= 10) {
    //         feedback = 'You\'re Warm';
    //     }
    //     else if (difference >= 1) {
    //         feedback = 'You\'re Hot!';
    //     }
    //     else {
    //         feedback = 'You got it!';
    //     }
    //
    //     this.setState({
    //         feedback,
    //         guesses: [...this.state.guesses, guess]
    //     });
    // }

    //render() {
        return (
            <div>
                <Header />
                <section className="game">
                <GuessSection />
                <GuessCount  />
                <GuessList  />
                </section>
            </div>
        );
    //}
}

// Game.defaultProps = {
//   guesses: [],
//   feedback: 'Make your guess!',
//   correctAnswer: Math.floor(Math.random() * 100) + 1
// }
//
// export const mapStateToProps = state => ({
//   guesses: state.guesses,
//   feedback: state.feedback,
//   correctAnswer: state.correctAnswer
// })
