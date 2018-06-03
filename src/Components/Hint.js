import React from 'react';
import './Hint.css';

function Hint(props) {
    const { guess, target } = props;
    const hint = (guess < target) ? "Too Low" : "Too High";

    return (
        <div className="hint">
            <div>Your Last Guess:</div>
            <div>{guess}</div>
            <div>{hint}</div>
        </div>
    );
}

export default Hint;