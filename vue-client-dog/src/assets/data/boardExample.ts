const board = {
    "boardSize": 20,
    "playerNumber": 4,
    "currentPlayer": 2,
    "players": [
        {
            "player index": 0,
            "name": "P1",
            "color": "yellow",
            "homePosition": 0,
            "pieces": [
                {
                    "piece_idx": 0,
                    "piece_pos": 14
                },
                {
                    "piece_idx": 1,
                    "piece_pos": 0
                },
                {
                    "piece_idx": 2,
                    "piece_pos": 0
                },
                {
                    "piece_idx": 3,
                    "piece_pos": 0
                }
            ],
            "garage": [
                {
                    "garage_idx": 0,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 1,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 2,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 3,
                    "garage_piece": -1
                }
            ],
            "house": [
                {
                    "inHouse": 1
                },
                {
                    "inHouse": 2
                },
                {
                    "inHouse": 3
                }
            ],
            "cards": [
                {
                    "card_symbol": "3"
                },
                {
                    "card_symbol": "10"
                },
                {
                    "card_symbol": "8"
                }
            ]
        },
        {
            "player index": 1,
            "name": "P2",
            "color": "white",
            "homePosition": 5,
            "pieces": [
                {
                    "piece_idx": 0,
                    "piece_pos": 5
                },
                {
                    "piece_idx": 1,
                    "piece_pos": 5
                },
                {
                    "piece_idx": 2,
                    "piece_pos": 5
                },
                {
                    "piece_idx": 3,
                    "piece_pos": 5
                }
            ],
            "garage": [
                {
                    "garage_idx": 0,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 1,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 2,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 3,
                    "garage_piece": -1
                }
            ],
            "house": [
                {
                    "inHouse": 1
                },
                {
                    "inHouse": 2
                },
                {
                    "inHouse": 3
                }
            ],
            "cards": [
                {
                    "card_symbol": "questionmark"
                },
                {
                    "card_symbol": "questionmark"
                },
                {
                    "card_symbol": "10"
                }
            ]
        },
        {
            "player index": 2,
            "name": "P3",
            "color": "green",
            "homePosition": 10,
            "pieces": [
                {
                    "piece_idx": 0,
                    "piece_pos": 12
                },
                {
                    "piece_idx": 1,
                    "piece_pos": 10
                },
                {
                    "piece_idx": 2,
                    "piece_pos": 10
                },
                {
                    "piece_idx": 3,
                    "piece_pos": 10
                }
            ],
            "garage": [
                {
                    "garage_idx": 0,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 1,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 2,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 3,
                    "garage_piece": -1
                }
            ],
            "house": [
                {
                    "inHouse": 1
                },
                {
                    "inHouse": 2
                },
                {
                    "inHouse": 3
                }
            ],
            "cards": [
                {
                    "card_symbol": "questionmark"
                },
                {
                    "card_symbol": "6"
                },
                {
                    "card_symbol": "2"
                },
                {
                    "card_symbol": "7"
                }
            ]
        },
        {
            "player index": 3,
            "name": "P4",
            "color": "red",
            "homePosition": 15,
            "pieces": [
                {
                    "piece_idx": 0,
                    "piece_pos": 1
                },
                {
                    "piece_idx": 1,
                    "piece_pos": 15
                },
                {
                    "piece_idx": 2,
                    "piece_pos": 15
                },
                {
                    "piece_idx": 3,
                    "piece_pos": 15
                }
            ],
            "garage": [
                {
                    "garage_idx": 0,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 1,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 2,
                    "garage_piece": -1
                },
                {
                    "garage_idx": 3,
                    "garage_piece": -1
                }
            ],
            "house": [
                {
                    "inHouse": 1
                },
                {
                    "inHouse": 2
                },
                {
                    "inHouse": 3
                }
            ],
            "cards": [
                {
                    "card_symbol": "swapCard"
                },
                {
                    "card_symbol": "questionmark"
                },
                {
                    "card_symbol": "6"
                },
                {
                    "card_symbol": "9"
                }
            ]
        }
    ]
}


export function inhouse() {
    const currentPlayer = board.currentPlayer;
    let houseArray:any = [];
    const activeHouses = board.players[currentPlayer].house.length;
    const amoutOfPieces = board.players[currentPlayer].pieces.length;
    let counter = 0;
    for (let i = 0; i < activeHouses; i++) {
        const img = require(`../images/icons/${board.players[currentPlayer].color}.png`)
        houseArray.push({ image: img, id: `houseId${counter++}`})
    }

    for (let i = 0; i < amoutOfPieces - activeHouses; i++) {
        const img = require(`../images/icons/field.png`)
        houseArray.push({ image: img, id: `houseId${counter++}`})
        
    }
        
    return houseArray
}


export function garage() {
    const currentPlayer = board.currentPlayer;
    const amoutOfPieces = board.players[currentPlayer].pieces.length;
    let houseArray:any = new Array<object>(amoutOfPieces);
    const garageArray = board.players[currentPlayer].garage;

    for (let i = 0; i < garageArray.length; i++) {
        const pos = garageArray[i].garage_piece;
        if(pos === -1) {
            const img = require(`../images/icons/field.png`)
            houseArray[i] = { image: img, id: `garageId${i}`}
        }else{
            const img = require(`../images/icons/${board.players[currentPlayer].color}.png`)
            houseArray[pos] = { image: img, id: `garageId${i}`}
        }
    
    }
        
    return houseArray
}

export function field() {
    const boardSize = board.boardSize;
    const pieceArray = board.players.map(player => {
        const pieces = player.pieces.filter(piece => {
            let bool = true;
            player.house.forEach(house => {
                if(piece.piece_idx === house.inHouse){
                    bool = false;
                }
            })
            return bool;
        });
        return { color: player.color, pieces: pieces }
    })

    let boardArray = new Array<object>(boardSize);

    for (let playerIdx = 0; playerIdx < board.playerNumber; playerIdx++) {
        pieceArray[playerIdx].pieces.map(piece => {
            const img = require(`../images/icons/${pieceArray[playerIdx].color}.png`)
            boardArray[piece.piece_pos] = { image: img, pos: piece.piece_pos }
        });
    }

    for (let i = 0; i < boardSize; i++) {
        if (!boardArray[i]) {
            const img = require(`../images/icons/field.png`)
            boardArray[i] = ({ image: img, pos: i })
        }
    }
    return boardArray;
}
export default board;