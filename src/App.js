import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            lastValue: null,
        };
        this.onNumBtnClick = this.onNumBtnClick.bind(this);
        this.onClrBtnClick = this.onClrBtnClick.bind(this);

    }

    onNumBtnClick(e) {
        const number = Number(e.target.innerHTML);
        const { value } = this.state;
        const newValue = value ? (value * 10 + number) : number;
        this.setState({value: newValue});
    }

    onClrBtnClick() {
        const { value } = this.state;
        if (value) {
            const newValue = Math.floor(value / 10);
            this.setState({value: newValue});
        }
    }

    render() {
        const { value } = this.state;
        return (
            <div className="App container">

                <div className="row header">
                    <div className="display">{Number(value)}</div>
                </div>
                <div className="row">
                    <button className="button num-button" onClick={this.onNumBtnClick}>1</button>
                    <button className="button num-button" onClick={this.onNumBtnClick}>2</button>
                    <button className="button num-button" onClick={this.onNumBtnClick}>3</button>
                </div>
                <div className="row">
                    <button className="button num-button" onClick={this.onNumBtnClick}>4</button>
                    <button className="button num-button" onClick={this.onNumBtnClick}>5</button>
                    <button className="button num-button" onClick={this.onNumBtnClick}>6</button>
                </div>
                <div className="row">
                    <button className="button num-button" onClick={this.onNumBtnClick}>7</button>
                    <button className="button num-button" onClick={this.onNumBtnClick}>8</button>
                    <button className="button num-button" onClick={this.onNumBtnClick}>9</button>
                </div>
                <div className="row">
                    <button className="button clear" onClick={this.onClrBtnClick}>&#x232b;</button>
                    <button className="button num-button">0</button>
                    <button className="button enter">&#x2713;</button>
                </div>
            </div>
        );
    }
}

export default App;
