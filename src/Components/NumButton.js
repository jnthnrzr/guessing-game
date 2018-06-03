import React from 'react';
import './NumButton.css';

class NumButton extends React.Component {
    clickNumBtn() {
        this.props.onNumBtnClick(this.props.value);
    }

    render() {
        return (
            <button className="button num-button"
                    onClick={this.clickNumBtn.bind(this)}>
                {this.props.value}
            </button>
        );
    }
}

export default NumButton;