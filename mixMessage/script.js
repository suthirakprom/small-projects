generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
}



const zodiacArray = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius']

const zodiacMessage = {
    aries: {
        message: 'hello aries',
    }, 
    taurus: {
        message: 'hello taurus',
    },
    gemini: {
        message: 'hi gemini',
    },
    cancer: {
        message: 'hello cancer',
    },
    leo: {
        message: 'hello leo',
    },
    virgo: {
        message: 'hello virgo',
    },
    libra: {
        message: 'hi libra',
    },
    scorpio: {
        message: 'hi scorpio',
    },
    sagittarius: {
        message: 'hello sagittarius',
    },
}


const printResult = () => {
    
    let objectLength = Object.keys(zodiacMessage).length
    console.log(zodiacArray[generateRandomNumber(objectLength)])
    console.log(zodiacMessage[zodiacArray[generateRandomNumber(objectLength)]].message)
}


printResult()
// console.log(generateRandomNumber(objectLength))