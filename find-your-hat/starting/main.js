const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(arr) {
        this._arr = arr;
    }

    get arr() {
        return this._arr;
    }

    print() {
        for(let i=0; i<this.arr.length; i++) {
            console.log(this._arr[i].join(''));
        }
        
    }

}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.print();