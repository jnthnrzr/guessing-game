import React from 'react';
import './Hint.css';

function Hint(props) {
    const { guess, target, haveWon } = props;
    const guessHeader = haveWon ? "Answer: " : "Last Guess: ";
    const guessLessThanTarget = (guess < target);
    const hint = haveWon ? "\n" : (guessLessThanTarget ? "Too Low" : "Too High");

    return (
        <div className="hint">
            {guessHeader}
            {guess}<br/>
            {hint}
        </div>
    );
}

export default Hint;