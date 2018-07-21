import React, { Component } from 'react';
import CalcLogic from './CalcLogic';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.calc = new CalcLogic();

        this.state = { seq: 0, displayValue: '', history: [] };

        this.doCalcLogicTest = this.doCalcLogicTest.bind(this);

    }

    pressKey(key) {
        console.log(key);
        this.calc.pressKey(key);
        this.state.displayValue = `${this.calc.getDisplayValue()}`;
        this.state.seq++;
        this.state.history.push({ seq: this.state.seq, leftValue: `[${key}]`, rightValue: this.state.displayValue });
        this.setState(this.state);
    }

    doCalcLogicTest(e) {
        // const log = (m) => { console.log(m); }

        // const display = () => {
        //     let value = `==> ${this.calc.getDisplayValue()}`
        // }
        this.setState(this.state);

        const press = (k) => {
            this.pressKey(k);
        }

        press('1');
        press('0');
        press('0');
        press('Plus');
        press('2');
        press('5');
        press('Plus');
        press('Clear');
        press('2');
        press('5');
        press('Plus');
        press('5');
        press('Equals');
        press('Clear');

        this.state.q = '99';
        this.setState(this.state);
    }

    render() {

        const button = (value, action) => {
            action = action ? action : value;
            //console.log(`${value} val,  ${action} act`);
            return (<button className="calcButton" onClick={() => { this.pressKey(action) }}>{value}</button>)
        }

        return (
            <div>
                <h1>Calculator</h1>
                <br />

                <div className="calcDisplay">
                    <div className="calcLine">
                        {this.state.displayValue}
                    </div>
                </div>

                <br />

                <div className="calcPad">
                    <div className="calcRow">
                        {button('7')}
                        {button('8')}
                        {button('9')}
                    </div>
                    <div className="calcRow">
                        {button('4')}
                        {button('5')}
                        {button('6')}
                    </div>
                    <div className="calcRow">
                        {button('1')}
                        {button('2')}
                        {button('3')}
                    </div>
                    <div className="calcRow">
                        <div></div>
                        {button('0')}
                        <div></div>
                    </div>
                    <div className="calcRow">
                        {button('C', 'Clear')}
                        {button('+', 'Plus')}
                        {button('-', 'Minus')}
                        {button('=', 'Equals')}
                    </div>

                </div>

                <br />
                <div>
                    {
                        // this.state.history.map(item => {
                        //     return (<div className='displayItem' key={item.seq}><div>{item.leftValue}</div><div>===></div><div>{item.rightValue}</div></div>);
                        // })
                    }
                </div>

                <br />
                <br />
                <button onClick={this.doCalcLogicTest}>Run Test</button>
            </div>
        );
    }
}

export default Calculator;
