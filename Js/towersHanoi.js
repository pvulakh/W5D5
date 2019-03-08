const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Game {
    constructor() {
        this.towers = Array.from({length: 3},
            () => Array.from({length: 3}));
        this.towers[0] = ([1,2,3]);
        this.towers[1].fill(0);
        this.towers[2].fill(0);
       
    }

    promptMove() {
        for (let i=0; i < 3; i++) {
            console.log(this.towers[i]);
        }
        reader.question('Where would you like to move? Input format: start_position, end_position.', function (response) {
            let startTowerIdx = parseInt(response[0]);
            let endTowerIdx = parseInt(response[1]);
            console.log(startTowerIdx, endTowerIdx);
        });
    }

    isValidMove(startTowerIdx, endTowerIdx) {
        if (this.towers[endTowerIdx][0] > this.towers[startTowerIdx][0]) {
            return true;
        } else {
            return false;
        }
    }
}

const hello = new Game














// run game turn till player wins
//return number of moves