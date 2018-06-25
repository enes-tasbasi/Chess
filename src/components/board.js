import React from 'react';
import Icon from './chessIcons';
import {Menu} from './menu';

import Chess from "chess.js";

let chess = new Chess();

// loads the board with the passed fen. Reads each object one by one to convert them to the 'whiteRook' format
function loadBoard(object, fen) {
    //   debugger;
    let modifiedBoard = {};

    if (!fen || fen !== "") {
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

function moveAPiece(pieceToMove, board) {
    //debugger;

    let pieceInfo = pieceToMove.split('');
    let rank = pieceInfo[1];
    let file = pieceInfo[0];

    let activePiece = getAPiece(board, rank, file);

    if (activePiece === "") {
        return board;
    }

    let tempBoard = board;
    let tempRank = tempBoard[parseInt(rank) + 1];
    tempRank[file] = activePiece;
    let emptyPastSquare = tempBoard[parseInt(rank)];
    emptyPastSquare[file] = "";

    //let chess = new Chess();

    // console.log(chess.board());

    return tempBoard;

}

class Board extends React.Component {
    constructor(props) {
        super(props);

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

        this.state = {
            boardBluePrint: defaultBoard,
            board: loadBoard(defaultBoard, "")

        };

        this.handleClick = this.handleClick.bind(this);
        this.refreshBoard = this.refreshBoard.bind(this);
    }


    handleClick(event) {

        let pieceToMove = event.target.id ? event.target.id : event.target.parentElement.id;

        let tempBoard = moveAPiece(pieceToMove, this.state.board);
        this.setState({board: tempBoard});

    }

    // this func calls loadBoard and passes the fen argument that is passed from menu.js
    refreshBoard(fen) {
        this.setState({board: loadBoard(this.state.boardBluePrint, fen)});
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
                                <th id={"a" + key} onClick={this.handleClick} className="square"><Icon
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
