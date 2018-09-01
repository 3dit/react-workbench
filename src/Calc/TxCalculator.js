import React, { Component } from 'react';
import Calculator from './Calculator'
import TxControls from './TxControls'

class TxCalculator extends React.Component {

    constructor(props) {
        super(props);

        this.currentValue = 0;
    }


    render() {

        return (

            <div>
                
                <div className="calcTitle">
                    <h1>Player Transaction (integer) Calculator</h1>
                </div>

                <div className="txContainer">

                    <div className="calcContainer">
                    
                        <Calculator />
                    
                    </div>

                    <div className="txControlsContainer">

                        <TxControls />

                    </div>

                </div>

            </div>
        );
    }
}

export default TxCalculator;
