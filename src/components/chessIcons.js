import React from 'react';


class IconMaker extends React.Component {
    handleClick() {

    }
    render() {
        return (
            <i  style={{color: this.props.color}} className={this.props.className} onClick={this.handleClick} />
        )
    }
    }

class Icon extends React.Component {

    blackRook() {
        return <IconMaker color="black" className="fas fa-chess-rook"/>
    }

    blackBishop() {
        return <IconMaker color="black" className="fas fa-chess-bishop"/>
    }

    blackKnight() {
        return <i style={{color: "black"}} className="fas fa-chess-knight"/>
    }

    blackQueen() {
        return <i style={{color: "black"}} className="fas fa-chess-queen"/>
    }

    blackKing() {
        return <i style={{color: "black"}} className="fas fa-chess-king"/>
    }

    blackPawn() {
        return <i style={{color: "black"}} className="fas fa-chess-pawn"/>
    }

    whiteRook() {
        return <i style={{color: "white"}} className="fas fa-chess-rook"/>
    }

    whiteBishop() {
        return <i style={{color: "white"}} className="fas fa-chess-bishop"/>
    }

    whiteKnight() {
        return <i style={{color: "white"}} className="fas fa-chess-knight"/>
    }

    whiteQueen() {
        return <i style={{color: "white"}} className="fas fa-chess-queen"/>
    }

    whiteKing() {
        return <i style={{color: "white"}} className="fas fa-chess-king"/>
    }

    whitePawn() {
        return <i style={{color: "white"}} className="fas fa-chess-pawn"/>
    }

    render() {
        switch (this.props.iconName) {
            case "blackRook":
                return this.blackRook();
            case "blackBishop":
                return this.blackBishop();
            case "blackKnight":
                return this.blackKnight();
            case "blackQueen":
                return this.blackQueen();
            case "blackKing":
                return this.blackKing();
            case "blackPawn":
                return this.blackPawn();
            case "whiteRook":
                return this.whiteRook();
            case "whiteBishop":
                return this.whiteBishop();
            case "whiteKnight":
                return this.whiteKnight();
            case "whiteQueen":
                return this.whiteQueen();
            case "whiteKing":
                return this.whiteKing();
            case "whitePawn":
                return this.whitePawn();
            default:
                return ""
        }
    }
}


export default Icon;