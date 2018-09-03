import React, { Component } from 'react';
import { calcLogic } from './CalcProvider';
import objectAssign from 'object-assign';
import * as CALC from './CalcActions';
import txService from './TxService';

class TxControls extends React.Component {

    constructor(props) {
        super(props);
        //this.tx = txLogic;

        this.buttonEventHandler = props.buttonEventHandler;

        txService.setDefaultConfiguration();

        var initialState = {
            seq: 0,
            history: [], /* testing, debugging */
            players: txService.getPlayers()
        };

        this.state = initialState;

        this.txButtons = [
            {
                name: 'From',
                handler: props.buttonEventHandler,
                action: 'TxFrom'
            },
            {
                name: 'To',
                handler: props.buttonEventHandler,
                action: 'TxTo'
            }];
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
            history: updatedHistory
        });

        this.setState(newState);

    }

    render() {

        const button = (value, action) => {
            action = action ? action : value;
            return (
                <button className="slot key"
                    onClick={() => { this.pressKey(action) }}>
                    {value}
                </button>
            )
        }

        const playerButton = (value, action) => {
            action = action ? action : value;
            return (
                <button className="wide key"
                    onClick={() => { this.pressKey(action) }}>
                    {value}
                </button>
            )
        }

        const playerButtons = this.state.players.map((player) => {
            console.log('playerButtons func', arguments);
            return (
                <li key={player.id}
                    onClick={() => { this.buttonEventHandler({ type: 'player', data: player }) }}
                >
                    {playerButton(player.name)}
                </li>
            )
        });

        return (

            <div>

                <div className="keys">

                    <div className="txControlsContainer">

                        <div style={{ display: 'flex' }}>
                            <ul>
                                {
                                    this.txButtons.map((button) => {
                                        return (
                                            <li key={button.name}
                                                onClick={ () => this.buttonEventHandler({ type: 'tx', data: button.name }) }
                                            >
                                                {playerButton(button.name)}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <ul>
                                {
                                    this.state.players.map((player) => {
                                        return (
                                            <li key={player.id}
                                                onClick={
                                                    () => this.buttonEventHandler({ type: 'player', data: player })
                                                }>
                                                {playerButton(player.name)}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>


                </div>

            </div>
        );
    }
}

export default TxControls;
