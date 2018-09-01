import React, { Component } from 'react';
import { calcLogic } from './CalcProvider';
import objectAssign from 'object-assign';
import * as CALC from './CalcActions';

class TxControls extends React.Component {

    constructor(props) {
        super(props);
        //this.tx = txLogic;

        this.state = {
            seq: 0,
            history: [] /* testing, debugging */
        };
    }

    pressKey(key) {
        let newState;
        let newEvent;
    
        let newSeq = this.state.seq + 1;

        let updatedHistory = this.state.history.slice();//clone

        newEvent = {
            seq: this.state.seq + 1,
            leftValue: `[${key}]`,
            rightValue: this.state.displayValue
        }

        updatedHistory.push(newEvent);

        newState = objectAssign({}, this.state, {
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

        const wideButton = (value, action) => {
            action = action ? action : value;
            return (<button className="wide key"
                onClick={() => { this.pressKey(action) }}>
                {value}
            </button>)
        }

        return (

            <div>

                <div className="keys">

                    <div className="txControlsContainer">

                        {wideButton('Scott')}
                        {wideButton('Michelle')}
                        {wideButton('Gabe')}
                        {wideButton('zzz!')}

                    </div>


                </div>

            </div>
        );
    }
}

export default TxControls;
