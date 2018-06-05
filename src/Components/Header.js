import React from 'react';
import './Header.css';

function Header(props) {
    const { haveWon, iteration, target } = props;
    const min = 0, max = 100, count = 10 - iteration;

    const instruction = (
        <div>
            Guess the number<br/> between <br/> {min} and {max} <br/> in <br/> {count} tries
        </div>
    );

    const stillInTheGame = iteration < 10;
    const message = haveWon ? "You've won!" : instruction;
    const ranOutOfTries = (
        <div>
            You ran out of tries.<br/> The number was {target}.
        </div>
    );
    const description = stillInTheGame ? message : ranOutOfTries;

    return (
        <h3 className="header">
            {description}
        </h3>
    );
}

export default Header;