import React from 'react';
//import {ReactDOM} from 'react-dom';

let Board = () => (
    <div className="container">
        <table>
            <tr>
            <th className="square"><i className="fas fa-chess-rook" /></th>
            <th className="square"><i className="fas fa-chess-bishop"/></th>
            <th className="square"><i className="fas fa-chess-knight"/></th>
            <th className="square"><i className="fas fa-chess-queen"/></th>
            <th className="square"><i className="fas fa-chess-king"/></th>
            <th className="square"><i className="fas fa-chess-knight"/></th>
            <th className="square"><i className="fas fa-chess-bishop"/></th>
            <th className="square"><i className="fas fa-chess-rook"/></th>
        </tr>
            <tr>
                <th className="square"><i className="fas fa-chess-pawn" /></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
            </tr>
            <tr>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
            </tr>
            <tr>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
            </tr>
            <tr>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
            </tr>
            <tr>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
                <th className="square"></th>
            </tr>
            <tr>
                <th className="square"><i className="fas fa-chess-pawn" /></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
                <th className="square"><i className="fas fa-chess-pawn"/></th>
            </tr>
            <tr>
                <th className="square"><i style={{color: 'white'}} className="fas fa-chess-rook" /></th>
                <th className="square"><i className="fas fa-chess-bishop"/></th>
                <th className="square"><i className="fas fa-chess-knight"/></th>
                <th className="square"><i className="fas fa-chess-queen"/></th>
                <th className="square"><i className="fas fa-chess-king"/></th>
                <th className="square"><i className="fas fa-chess-knight"/></th>
                <th className="square"><i className="fas fa-chess-bishop"/></th>
                <th className="square"><i className="fas fa-chess-rook"/></th>
            </tr>
        </table>
    </div>
);

export default Board;
