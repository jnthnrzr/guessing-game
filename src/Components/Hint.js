import React from 'react';
import './Hint.css';

function Hint(props) {
    const { guess, target, haveWon } = props;
    const guessHeader = haveWon ? "Answer: " : "Your Last Guess: ";
    const hint = haveWon ? "" : ((guess < target) ? "Too Low" : "Too High");

    return (
        <div className="hint">
            {guessHeader}
            {guess}<br/>
            {hint}
        </div>
    );
}

export default Hint;