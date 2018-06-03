import React from 'react';
import './NumPad.css';
import NumButton from './NumButton';

function Display(props) {
    return (
        <div className="display">{Number(props.guess)}</div>
    );
}

function NumPad(props) {
    // Extract buttonHandlers from props.
    const { buttonHandlers, guess } = props;
    const {onNumBtnClick, onEnterBtnClick, onClrBtnClick} = buttonHandlers;

    // Setup the NumPad button rows.
    const buttonTemplate = (number) => (
        <NumButton onNumBtnClick={onNumBtnClick} key={number} value={number} />
    );

    const firstRowBtns = [1, 2, 3].map(buttonTemplate);
    const secondRowBtns = [4, 5, 6].map(buttonTemplate);
    const thirdRowBtns = [7, 8, 9].map(buttonTemplate);
    const lastRowBtns = (
        <div>
            <button className="button clear" onClick={onClrBtnClick}>&#x232b;</button>
            <NumButton onNumBtnClick={onNumBtnClick} value={0}/>
            <button className="button enter" onClick={onEnterBtnClick}>&#x2713;</button>
        </div>
    );

    // Construct the NumPad div.
    return (
        <div className="numpad">
            <Display guess={guess} />
            <div className="row">{firstRowBtns}</div>
            <div className="row">{secondRowBtns}</div>
            <div className="row">{thirdRowBtns}</div>
            <div className="row">{lastRowBtns}</div>
        </div>
    );
}

export default NumPad;