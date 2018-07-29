import React, { Component } from 'react';
import { calcLogic } from './Providers/CalcProvider';
import objectAssign from 'object-assign';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.calc = calcLogic;

        this.state = {
            seq: 0,
            displayValue: this.calc.getDisplayValue(),
            history: [] /* testing, debugging */
        };
    }

    pressKey(key) {
        let newState;
        let newEvent;
    
        this.calc.doPressKey3(key);
        
        let newSeq = this.state.seq + 1;

        let updatedHistory = this.state.history.slice();//clone

        newEvent = {
            seq: this.state.seq + 1,
            leftValue: `[${key}]`,
            rightValue: this.state.displayValue
        }

        updatedHistory.push(newEvent);

        newState = objectAssign({}, this.state, {
            displayValue:  `${this.calc.getDisplayValue()}`,
            seq: newSeq,
            history : updatedHistory
        });

        this.setState(newState);

    }

    render() {

        const button = (value, action) => {
            action = action ? action : value;
            return (<button className="slot key"
                onClick={() => { this.pressKey(action) }}>
                {value}
            </button>)
        }

        const tallButton = (value, action) => {
            action = action ? action : value;
            return (<button className="tall key"
                onClick={() => { this.pressKey(action) }}>
                {value}
            </button>)
        }

        return (
            <div>
                <h1>Player Transaction (integer) Calculator</h1>
                <br />

                <div className="mainContainer">

                    <div className="displayContainer">

                        <div className="display">

                            <div className="readout">

                                {this.state.displayValue}

                            </div>

                        </div>

                    </div>

                    <div className="keys">


                        <div className="keycontainer">

                            {button('7')}
                            {button('8')}
                            {button('9')}
                            {button('+', 'Plus')}

                            {button('4')}
                            {button('5')}
                            {button('6')}
                            {button('-', 'Minus')}

                            {button('1')}
                            {button('2')}
                            {button('3')}
                            {tallButton('=', 'Equals')}

                            {button('C', 'Clear')}
                            {button('0')}
                            {button('*', 'Multiply')}

                            {button('/', 'Divide')}
                            {button('.', 'Decimal')}
                            {button('')}
                        </div>


                    </div>

                </div>
            </div>
        );
    }
}

export default Calculator;
