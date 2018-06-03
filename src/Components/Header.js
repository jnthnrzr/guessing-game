import React from 'react';
import './Header.css';

function Header(props) {
    const { haveWon } = props;
    const min = 0, max = 100, count = 10;

    const instruction = (
        <div>
            Guess the number<br/> between <br/> {min} and {max} <br/> in <br/> {count} tries
        </div>
    );

    const description = haveWon ? "You've won!" : instruction;

    return (
        <h3 className="header">
            {description}
        </h3>
    );
}

export default Header;