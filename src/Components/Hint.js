import React from 'react';
import './Hint.css';

function Hint(props) {
    const { guess, target } = props;
    const hint = (guess < target) ? "Too Low" : "Too High";

    return (
        <div className="hint">
            Your Last Guess:<br/>
            {guess}<br/>
            {hint}
        </div>
    );
}

export default Hint;