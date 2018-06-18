import React from 'react';

import Icon from './chessIcons';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: {
                rank8: {
                    1: "blackRook",
                    2: "blackBishop",
                    3: "blackKnight",
                    4: "blackQueen",
                    5: "blackKing",
                    6: "blackKnight",
                    7: "blackBishop",
                    8: "blackRook",
                },
                rank7: {
                    1: "blackPawn",
                    2: "blackPawn",
                    3: "blackPawn",
                    4: "blackPawn",
                    5: "blackPawn",
                    6: "blackPawn",
                    7: "blackPawn",
                    8: "blackPawn",
                },
                rank6: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                },
                rank5: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                },
                rank4: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                },
                rank3: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                },
                rank2: {
                    1: "whitePawn",
                    2: "whitePawn",
                    3: "whitePawn",
                    4: "whitePawn",
                    5: "whitePawn",
                    6: "whitePawn",
                    7: "whitePawn",
                    8: "whitePawn",
                },
                rank1: {
                    1: "whiteRook",
                    2: "whiteBishop",
                    3: "whiteKnight",
                    4: "whiteQueen",
                    5: "whiteKing",
                    6: "whiteKnight",
                    7: "whiteBishop",
                    8: "whiteRook",
                }
            }
            // board : {
            // a1: "whiteRook",
            // a2: "whiteBishop",
            // a3: "whiteKnight",
            // a4: "whiteQueen",
            // a5: "whiteKing",
            // a6: "whiteKnight",
            // a7: "whiteBishop",
            // a8: "whiteRook",
            // b1: "whitePawn",
            // b2: "whitePawn",
            // b3: "whitePawn",
            // b4: "whitePawn",
            // b5: "whitePawn",
            // b6: "whitePawn",
            // b7: "whitePawn",
            // b8: "whitePawn",
            // }
        }
    }

    render() {
        return (
            <div className="container">
                <table>

                    {Object.keys(this.state.board).map((key) => {

                        let eachRank = this.state.board[key];

                        return (
                            <tr>
                                <th className="square"><Icon iconName={eachRank["1"]}/></th>
                                <th className="square"><Icon iconName={eachRank["2"]}/></th>
                                <th className="square"><Icon iconName={eachRank["3"]}/></th>
                                <th className="square"><Icon iconName={eachRank["4"]}/></th>
                                <th className="square"><Icon iconName={eachRank["5"]}/></th>
                                <th className="square"><Icon iconName={eachRank["6"]}/></th>
                                <th className="square"><Icon iconName={eachRank["7"]}/></th>
                                <th className="square"><Icon iconName={eachRank["8"]}/></th>
                            </tr>
                        )
                    })}

                </table>
            </div>
        )
    }
}

export default Board;
