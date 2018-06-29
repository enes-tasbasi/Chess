import React from 'react';

let FEN = "";

export class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {menuIsOpen: true, menuClassName: "menu"};

        this.handleClick = this.handleClick.bind(this);
        this.changeMenu = this.changeMenu.bind(this);
    }

    handleClick() {
        FEN = this.refs.input.value;

        this.props.refreshBoard(FEN);
    }

    changeMenu() {
        let tempVar = (this.state.menuIsOpen) ? "menu closed" : "menu";
        let tempBoolVar = !this.state.menuIsOpen;
        this.setState({menuIsOpen: tempBoolVar, menuClassName: tempVar});
    }

    render() {

        if (this.state.menuIsOpen) {
            return (
                <div className={this.state.menuClassName}>
                    <div onClick={this.changeMenu} className="closeDiv"><i className="fas fa-arrow-left"/></div>
                    <input ref="input" type="text" placeholder="Enter a chess FEN"/>
                    <button onClick={this.handleClick}>Go!</button>
                </div>
            )
        } else {
            return (
                <div className="closeDiv closed" onClick={this.changeMenu}><i className="fas fa-arrow-left"/></div>
            )
        }

    }
}
