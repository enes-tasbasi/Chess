import React from 'react';
import Icon from './chessIcons';
import {Menu} from './menu';

import Chess from "chess.js";
import $ from 'jquery';

let chess = new Chess();

let defaultBoard = {
    "8": {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
    },
    "7": {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
    },
    "6": {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
    },
    "5": {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
    },
    "4": {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
    },
    "3": {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
    },
    "2": {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
    },
    "1": {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
    }
};

// loads the board with the passed fen. Reads each object one by one to convert them to the 'whiteRook' format
function loadBoard(object, fen) {
    let modifiedBoard = {};

    if (fen !== undefined) {
        chess.load(fen);
    }

    Object.keys(object).map((key) => {

        if (object.hasOwnProperty(key)) {
            let innerObj = object[key];
            let modRank = {};
            for (let inner in innerObj) {
                let pos = chess.get(inner + key);
                let receivedPiece = "";
                if (pos) {
                    switch (pos.color) {
                        case 'w':
                            receivedPiece += 'white';
                            break;
                        case 'b':
                            receivedPiece += 'black';
                            break;
                    }
                    switch (pos.type) {
                        case 'r':
                            receivedPiece += 'Rook';
                            break;
                        case 'b':
                            receivedPiece += 'Bishop';
                            break;
                        case 'n':
                            receivedPiece += 'Knight';
                            break;
                        case 'k':
                            receivedPiece += 'King';
                            break;
                        case 'q':
                            receivedPiece += 'Queen';
                            break;
                        case 'p':
                            receivedPiece += 'Pawn';
                            break;

                    }
                }
                modRank[inner] = receivedPiece;
            }
            modifiedBoard[key] = modRank;

        }

    });
    return modifiedBoard;
}

function getAPiece(board, rank, file) {
    let upper = board[rank];
    return upper[file];
}

function moveAPiece(board) {
    //debugger;

    // let pieceInfo = pieceToMove.split('');
    // let rank = pieceInfo[1];
    // let file = pieceInfo[0];
    //
    // let activePiece = getAPiece(board, rank, file);
    //
    // if (activePiece === "") {
    //     return board;
    // }
    //
    // let tempBoard = board;
    // let tempRank = tempBoard[parseInt(rank) + 1];
    // tempRank[file] = activePiece;
    // let emptyPastSquare = tempBoard[parseInt(rank)];
    // emptyPastSquare[file] = "";

    return loadBoard(board);

}

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: loadBoard(defaultBoard, ""),
            highlightedSquares: [],
            activePiece: "",
            currentMoves: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.refreshBoard = this.refreshBoard.bind(this);
    }

    // handles the click event from the rendered board
    handleClick(event) {

        //debugger;
        let pieceToMove = event.target.id ? event.target.id : event.target.parentElement.id;
        let badChars = ['R', 'B', 'Q', 'K', 'N', 'x', '+', '#'];
        let moves = chess.moves({square: pieceToMove});
        console.log(moves);


        // save the active piece to the state so it can be used later on ( save it as "" if its a "P" [pawn] )
        let piece = "";
        if (chess.get(pieceToMove)) {
            piece = chess.get(pieceToMove).type.toUpperCase();
        }
        if (piece !== 'P') {
            this.setState({activePiece: piece});
        } else {
            this.setState({activePiece: ""});
        }


        // check if any squares are highlighted and if the user pressed one of the highlighted squares, so a move can be made
        if (this.state.highlightedSquares.length > 0) {

            for (let i = 0; i < this.state.highlightedSquares.length; i++) {
                if (pieceToMove === this.state.highlightedSquares[i]) {
                    let moveString = this.state.activePiece + this.state.highlightedSquares[i];
                    if(this.state.currentMoves[i].indexOf('x') > -1) {
                        moveString = this.state.activePiece + 'x' + this.state.highlightedSquares[i];
                    }
                    chess.move(moveString);
                    this.setState({board: loadBoard(defaultBoard)});
                }
                $('#' + this.state.highlightedSquares[i]).css('box-shadow', 'none');
                this.setState({currentMoves: []});
            }

        }

        // if the move is in this format 'Nf3' replace the 'N' with ''
        for (let i = 0; i < moves.length; i++) {
            for (let a = 0; a < badChars.length; a++) {
                if (moves[i].indexOf(badChars[a] > -1)) {
                    moves[i] = moves[i].replace(badChars[a], '');
                }
            }

            //style the box so the user can see which moves can be made
            $('#' + moves[i]).css('box-shadow', 'inset 0 0 0 1000px rgba(0,240,0,.3)');
            this.setState({currentMoves: chess.moves({square: pieceToMove})});
        }

        // store the currently highlighted squares as state so it can be used in the future
        this.setState({highlightedSquares: moves});


        // refresh the board after changes
        let tempBoard = loadBoard(defaultBoard);
        this.setState({board: tempBoard});

    }

    // this func calls loadBoard and passes the fen argument that is passed from menu.js
    refreshBoard(fen) {
        this.setState({board: loadBoard(defaultBoard, fen)});
    }

    render() {
        return (
            <div className="container">
                <Menu refreshBoard={this.refreshBoard}/>
                <table>

                    {Object.keys(this.state.board).map((key) => {


                        // Use switch to flip the board, otherwise the player will be facing black
                        // this is probably a bad way of doing it.
                        switch (key) {
                            case "1":
                                key = "8";
                                break;
                            case "2":
                                key = "7";
                                break;
                            case "3":
                                key = "6";
                                break;
                            case "4":
                                key = "5";
                                break;
                            case "5":
                                key = "4";
                                break;
                            case "6":
                                key = "3";
                                break;
                            case "7":
                                key = "2";
                                break;
                            case "8":
                                key = "1";
                                break;
                        }

                        let eachRank = this.state.board[key];

                        return (
                            <tr>
                                <th style={{boxShadow: 'none'}} id={"a" + key} onClick={this.handleClick}
                                    className="square"><Icon
                                    iconName={eachRank["a"]}/></th>
                                <th id={"b" + key} onClick={this.handleClick} className="square"><Icon
                                    iconName={eachRank["b"]}/></th>
                                <th id={"c" + key} onClick={this.handleClick} className="square"><Icon
                                    iconName={eachRank["c"]}/></th>
                                <th id={"d" + key} onClick={this.handleClick} className="square"><Icon
                                    iconName={eachRank["d"]}/></th>
                                <th id={"e" + key} onClick={this.handleClick} className="square"><Icon
                                    iconName={eachRank["e"]}/></th>
                                <th id={"f" + key} onClick={this.handleClick} className="square"><Icon
                                    iconName={eachRank["f"]}/></th>
                                <th id={"g" + key} onClick={this.handleClick} className="square"><Icon
                                    iconName={eachRank["g"]}/></th>
                                <th id={"h" + key} onClick={this.handleClick} className="square"><Icon
                                    iconName={eachRank["h"]}/></th>
                            </tr>
                        )
                    })}

                </table>
            </div>
        )
    }
}

export default Board;
