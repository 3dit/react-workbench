import React, { Component } from 'react';
import { calcLogic } from './CalcProvider';
import objectAssign from 'object-assign';
import * as CALC from './CalcActions';

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
                        {button('+', CALC.PLUS)}

                        {button('4')}
                        {button('5')}
                        {button('6')}
                        {button('-', CALC.MINUS)}

                        {button('1')}
                        {button('2')}
                        {button('3')}
                        {tallButton('=', CALC.EQUALS)}

                        {button('C', CALC.CLEAR)}
                        {button('0')}
                        {button('*', CALC.MULTIPLY)}


                        {/*   
                        {button('/', CALC.DIVIDE)}
                        {button('.', CALC.DECIMAL)}
                        {button('')} 
                        */}

                    </div>


                </div>

            </div>
        );
    }
}

export default Calculator;
