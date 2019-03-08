const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const time = new Date().toLocaleTimeString();

class Clock {
    constructor() {
        this.time = new Date();
        this.hours = this.time.getHours();
        this.minutes = this.time.getMinutes();
        this.seconds = this.time.getSeconds();

        this.printTime();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        this.seconds = (this.seconds + 1) % 60;
        this.printTime();
    }

}

//const clock = new Clock();

const addNumbers = (sum, numsLeft, completionCallback) => {
    if (numsLeft === 0) {
        reader.close();
        return completionCallback(sum);
    }

    reader.question('Please enter a number:', function (res) {
        sum += parseInt(res);
        console.log(sum);
        numsLeft -= 1;
        return addNumbers(sum, numsLeft, completionCallback);
    });
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
const askIfGreaterThan = (el1, el2, callback) => {
    reader.question(`is the first thing ${el1} bigger than the second thingy ${el2}? `, function (res) {
        if (res === 'yes') {
            callback(true);
        } else {
            callback(false);
        }
    });
};

const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
    if (i === (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps);
    }
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
            if (isGreaterThan) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
    }
};
const absurdBubbleSort = (arr, sortCompletionCallback) => {
    
    const outerBubbleSortLoop = (madeAnySwaps) => {
        if (madeAnySwaps === true) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    };
    let madeAnySwaps = true;
};


absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});


// absurdBubbleSort([1,6,3,4], sortCompletionCallback);
//[1,4,2,5,7,1]