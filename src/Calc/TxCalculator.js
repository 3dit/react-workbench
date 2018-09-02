import React, { Component } from 'react';
import Calculator from './Calculator'
import TxControls from './TxControls'
import txService from './TxService'

class TxCalculator extends React.Component {

    constructor(props) {
        super(props);

        var newState = {
            calcNumericValue: 0,
            selectedPlayer: null,
            txMode: null
        }

        this.state = newState;

        this.calcDisplayHandler = this.calcDisplayHandler.bind(this);
        this.txButtonEventHandler = this.txButtonEventHandler.bind(this);
    }

    calcDisplayHandler(updatedDisplay) {
        console.log('Calc callback ', updatedDisplay);
        //we should extend/assign this so we can maintain 'history' of the state, redux like
        this.state.calcNumericValue = updatedDisplay.numericValue;
        this.setState(this.state);
    }

    txButtonEventHandler(buttonEvent) {

        if (buttonEvent.type === 'tx') {
            console.log(buttonEvent);
            switch (buttonEvent.action) {
                case 'TxTo':
                    this.state.txMode = 'TxTo';
                    break;

                case 'TxFrom':
                    this.state.txMode = 'TxFrom';
                    break;
            }
        } else {
            console.log('PLAYER ', buttonEvent.data);
        }

        this.setState(this.state);



    }

    render() {

        return (

            <div>

                <div className="calcTitle">
                    <h1>Player Transaction (integer) Calculator</h1>
                </div>

                <div className="txContainer">

                    <div className="calcContainer">

                        <Calculator calcEvent={this.calcDisplayHandler} />

                    </div>

                    <div className="txControlsContainer">

                        <TxControls buttonEventHandler={this.txButtonEventHandler} />

                    </div>

                </div>

            </div>
        );
    }
}

export default TxCalculator;
