class ShiftCipher {
    constructor(shiftNumber) {
        this._shiftNumber = shiftNumber
    }

    get shiftNumber() {
        return this._shiftNumber
    }

    encrypt(string) {
        string = string.toLowerCase()
        let newString = []
        for(let i=0; i<string.length; i++) {
            let char = String.fromCharCode(string.charCodeAt(i)+this._shiftNumber)
            newString.push(char)
        }
        console.log(newString.join(''))
    }

    decrypt(string) {
        string = string.toLowerCase()
        let newString = []
        for(let i=0; i<string.length; i++) {
            let char = String.fromCharCode(string.charCodeAt(i)-this.shiftNumber)
            newString.push(char)
        }
        console.log(newString.join(''))
    }
}

let string1 = new ShiftCipher(2);
string1.encrypt('Hello');
string1.decrypt('jgnnq');