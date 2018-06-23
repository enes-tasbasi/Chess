const Chess = require('../../node_modules/chess.js/chess').Chess;
let chess = new Chess();

//
// let moves = chess.moves();
//
// let squares = {
//     "1": {
//         a: "wr",
//         b: "wb"
//     },
//     "2": {
//         a: "br",
//         b: "bb"
//     }
// };
//
// Object.keys(squares).map((key) => {
//    if(squares.hasOwnProperty(key)) {
//        let obj = squares[key];
//        for(let inner in obj) {
//            console.log(chess.get(inner + key));
//        }
//    }
// });

//
// while (!chess.game_over()) {
//     var moves = chess.moves();
//     var move = moves[Math.floor(Math.random() * moves.length)];
//     chess.move(move);
// }

function test(bool1, bool2) {
    if(bool1) {
        console.log("bool1 exists");
    }
    if(bool2) {
        console.log("bool2 exists");
    }
}

test(true);

