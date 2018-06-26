import React from 'react';
import './Hint.css';

class Hint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trivia: "",
        };
        this.getTrivia = this.getTrivia.bind(this);
    }

    getTrivia(guess) {
        // Use CORS to use https for NumbersAPI query.
        const url = `https://cors-anywhere.herokuapp.com/http://numbersapi.com/${guess}/trivia`;
        fetch(url)
            .then((resp) => resp.text())
            .then((data => this.setState({ trivia: data })))
            .catch((error) => console.log(error));
    }

    componentDidMount() {
        const { guess } = this.props;
        this.getTrivia(guess);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.guess !== nextProps.guess) {
            const { guess } = nextProps;
            this.getTrivia(guess);
        }
    }

    render() {
        const { haveWon, guess, target } = this.props;
        const { trivia } = this.state;
        const guessHeader = haveWon ? "Answer: " : "Last Guess: ";
        const triviaHeader = "Did You Know:";

        const guessLessThanTarget = (guess < target);
        const hint = haveWon ? "\n" : (guessLessThanTarget ? "Too Low" : "Too High");
        return (
            <div className="hint">
                {guessHeader}
                {guess}<br/>
                {hint}<br/>
                {trivia !== "" && triviaHeader}<br/>
                {trivia}<br/>
            </div>
        );
    }
}

export default Hint;