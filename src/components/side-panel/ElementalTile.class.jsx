import React from 'react';

export default class ElementTileClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 1,
            symbol: "H",
            name: "Hydrogen",
            mass: 0,
            shells: [],
        }
    }


    //methods
    onClickHandler = e => {
        console.log("event: ", e)
    }


    render() {

        return (
            <div 
                className="element-tile-container"
                onClick={this.onClickHandler}
            >
                <div className="number">{this.state.number}</div>
                <div className="symbol">{this.state.symbol}</div>
                <div className="name">{this.state.name}</div>
                <div className="mass">{this.state.mass}</div>
                <div className="shells">{this.state.shells}</div>
            </div>
        )
    }
}