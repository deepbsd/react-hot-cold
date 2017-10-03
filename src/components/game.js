import React from 'react';
import './game.css';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default function Game(props){

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

}
