import React, { Component } from 'react';
import { calcLogic } from './Providers/CalcProvider';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.calc = calcLogic;

        this.state = {
            seq: 0,
            displayValue: this.calc.getDisplayValue(),
            history: [] /* testing, debugging */
        };

        this.doCalcLogicTest = this.doCalcLogicTest.bind(this);
    }

    pressKey(key) {
        this.calc.pressKey(key);
        this.state.displayValue = `${this.calc.getDisplayValue()}`;
        this.state.seq++;
        this.state.history.push({ seq: this.state.seq, leftValue: `[${key}]`, rightValue: this.state.displayValue });
        this.setState(this.state);
    }

    doCalcLogicTest() {
        this.pressKey('1');
        this.pressKey('0');
        this.pressKey('0');
        this.pressKey('Plus');
        this.pressKey('2');
        this.pressKey('5');
        this.pressKey('Plus');
        this.pressKey('Equals');
        // this.pressKey('Clear');
        // this.pressKey('2');
        // this.pressKey('5');
        // this.pressKey('Plus');
        // this.pressKey('5');
        // this.pressKey('Equals');
        // this.pressKey('Clear');
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
                <h1>Calculator</h1>
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
