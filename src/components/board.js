import React from 'react';

import Icon from './chessIcons';

function getAPiece(board, rank, file) {
    let upper = board[rank];
    return upper[file];
}

function moveAPiece(pieceToMove, board) {
    debugger;

    let pieceInfo = pieceToMove.split('');
    let rank = pieceInfo[0];
    let file = pieceInfo[1];

    let activePiece = getAPiece(board, rank, file);

    if(activePiece === "") {
        return board;
    }

    let tempBoard = board;
    let tempRank = tempBoard[parseInt(rank) + 1];
    tempRank[file] = activePiece;
    let emptyPastSquare = tempBoard[parseInt(rank)];
    emptyPastSquare[file] = "";

    return tempBoard;

}

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: {
                8: {
                    a: "blackRook",
                    b: "blackBishop",
                    c: "blackKnight",
                    d: "blackQueen",
                    e: "blackKing",
                    f: "blackKnight",
                    g: "blackBishop",
                    h: "blackRook",
                },
                7: {
                    a: "blackPawn",
                    b: "blackPawn",
                    c: "blackPawn",
                    d: "blackPawn",
                    e: "blackPawn",
                    f: "blackPawn",
                    g: "blackPawn",
                    h: "blackPawn",
                },
                6: {
                    a: "",
                    b: "",
                    c: "",
                    d: "",
                    e: "",
                    f: "",
                    g: "",
                    h: "",
                },
                5: {
                    a: "",
                    b: "",
                    c: "",
                    d: "",
                    e: "",
                    f: "",
                    g: "",
                    h: "",
                },
                4: {
                    a: "",
                    b: "",
                    c: "",
                    d: "",
                    e: "",
                    f: "",
                    g: "",
                    h: "",
                },
                3: {
                    a: "",
                    b: "",
                    c: "",
                    d: "",
                    e: "",
                    f: "",
                    g: "",
                    h: "",
                },
                2: {
                    a: "whitePawn",
                    b: "whitePawn",
                    c: "whitePawn",
                    d: "whitePawn",
                    e: "whitePawn",
                    f: "whitePawn",
                    g: "whitePawn",
                    h: "whitePawn",
                },
                1: {
                    a: "whiteRook",
                    b: "whiteBishop",
                    c: "whiteKnight",
                    d: "whiteQueen",
                    e: "whiteKing",
                    f: "whiteKnight",
                    g: "whiteBishop",
                    h: "whiteRook",
                }
            }

        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

        let pieceToMove = event.target.id ? event.target.id : event.target.parentElement.id;

        // let tempArr = pieceToMove.split('');
        // let rank = tempArr[0];
        // let file = tempArr[1];
        // let tempPiece = this.state.board[rank];
        // tempPiece = tempPiece[file];

        // let tempPiece = getAPiece(this.state.board, parseInt(rank), file);
        // console.log(tempPiece);


        // let tempBoard = this.state.board;
        // let tempRank = tempBoard[parseInt(rank) + 1];
        // tempRank[file] = tempPiece;
        // tempBoard[parseInt(rank) + 1] = getAPiece(this.state.board, parseInt(rank) + 1, file);

        let tempBoard = moveAPiece(pieceToMove, this.state.board);
        this.setState({ board: tempBoard });

    }

    render() {
        return (
            <div className="container">
                <table>

                    {Object.keys(this.state.board).map((key) => {

                        let eachRank = this.state.board[key];

                        return (
                            <tr>
                                <th ref={key + "a"} id={key + "a"} onClick={this.handleClick} className="square"><Icon iconName={eachRank["a"]}/></th>
                                <th ref={key + "b"} id={key + "b"} onClick={this.handleClick} className="square"><Icon iconName={eachRank["b"]}/></th>
                                <th ref={key + "c"} id={key + "c"} onClick={this.handleClick} className="square"><Icon iconName={eachRank["c"]}/></th>
                                <th ref={key + "d"} id={key + "d"} onClick={this.handleClick} className="square"><Icon iconName={eachRank["d"]}/></th>
                                <th ref={key + "e"} id={key + "e"} onClick={this.handleClick} className="square"><Icon iconName={eachRank["e"]}/></th>
                                <th ref={key + "f"} id={key + "f"} onClick={this.handleClick} className="square"><Icon iconName={eachRank["f"]}/></th>
                                <th ref={key + "g"} id={key + "g"} onClick={this.handleClick} className="square"><Icon iconName={eachRank["g"]}/></th>
                                <th ref={key + "h"} id={key + "h"} onClick={this.handleClick} className="square"><Icon iconName={eachRank["h"]}/></th>
                            </tr>
                        )
                    })}

                </table>
            </div>
        )
    }
}

export default Board;
