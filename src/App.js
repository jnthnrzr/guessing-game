import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App container">

                <div className="row header">
                    <div className="display">display</div>
                </div>
                <div className="row">
                    <button className="button num-button">1</button>
                    <button className="button num-button">2</button>
                    <button className="button num-button">3</button>
                </div>
                <div className="row">
                    <button className="button num-button">4</button>
                    <button className="button num-button">5</button>
                    <button className="button num-button">6</button>
                </div>
                <div className="row">
                    <button className="button num-button">7</button>
                    <button className="button num-button">8</button>
                    <button className="button num-button">9</button>
                </div>
                <div className="row">
                    <button className="button clear">&#x232b;</button>
                    <button className="button num-button">0</button>
                    <button className="button enter">&#x2713;</button>
                </div>
            </div>
        );
    }
}

export default App;
