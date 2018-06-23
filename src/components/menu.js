import React from 'react';

let FEN = ":(";

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        FEN = this.refs.input.value;
        console.log("the fen in menu.js is: " + FEN);
        this.props.refreshBoard(FEN);
    }

    render() {
        return (
            <div className="menu">
                <input ref="input" type="text" placeholder="Enter a chess FEN"/>
                <button onClick={this.handleClick}>Go!</button>
            </div>
        )
    }
}

export default FEN;


//export default Menu;