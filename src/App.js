import React from 'react';
import './App.css';
import Hint from './Components/Hint';
import Header from './Components/Header';
import NumPad from './Components/NumPad';

const isCorrect = (answer, correctAnswer) => (answer === correctAnswer);

const getRandomInt = (min = 0, max = 100) => {
    // The maximum is exclusive and the minimum is inclusive.
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const Reload = () => (
    <div className="reload">
        <a href="https://jnthnrzr.github.io/guessing-game">
            <button>Reset &#x21bb;</button>
        </a>
    </div>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iteration: 0,
            haveWon: false,
            target: getRandomInt(),
            guess: 0,
            lastGuess: 0,
        };
        this.onNumBtnClick = this.onNumBtnClick.bind(this);
        this.onClrBtnClick = this.onClrBtnClick.bind(this);
        this.onEnterBtnClick = this.onEnterBtnClick.bind(this);
    }

    onNumBtnClick(number) {
        const { guess } = this.state;
        const newGuess = guess ? (guess * 10 + number) : number;
        if (newGuess <= 100) {
            this.setState({ guess: newGuess });
        }
    }

    onClrBtnClick() {
        const { guess } = this.state;
        if (guess) {
            const newValue = Math.floor(guess / 10);
            this.setState({ guess: newValue });
        }
    }

    onEnterBtnClick() {
        const { guess, target, iteration } = this.state;

        // Check if current guess matches the target.
        const correct = isCorrect(guess, target);
        const nextIteration = correct ? 0 : iteration + 1;

        this.setState({
            iteration: nextIteration,
            lastGuess: guess,
            guess: 0,
            haveWon: correct,
        });
    }

    render() {
        const { guess, lastGuess, target, haveWon, iteration } = this.state;
        const firstTry = iteration === 0;
        const outOfTries = iteration === 10;
        const buttonHandlers = {
            onNumBtnClick: this.onNumBtnClick,
            onEnterBtnClick: this.onEnterBtnClick,
            onClrBtnClick: this.onClrBtnClick
        };

        return (
            <div className="App">

                <div className="output">
                    <Header lastGuess={lastGuess} haveWon={haveWon} iteration={iteration} target={target} />
                    {!firstTry && <Hint guess={lastGuess} target={target} haveWon={haveWon} />}
                </div>

                <div className="input">
                    {!haveWon && !outOfTries && <NumPad guess={guess} buttonHandlers={buttonHandlers} iteration={iteration} />}
                    {(haveWon || outOfTries) && <Reload />}
                </div>

            </div>
        );
    }
}

export default App;
