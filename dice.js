const diceRoller = (b, a) => {
    // return once
    // return Math.floor(Math.random()*(b-a+1)+a)

    let results = []
    let lowestNumber = 0

    for (let i = 1; i <= 4; i++) {
        results.push(Math.floor(Math.random()*(b-a+1)+a))
    }

    // let lowestNumber = 0

    // for (let i = 1; i <= results.length; i++) {
    //     if (results[i] <)
    // }

    return results
}

console.log(diceRoller(6, 1))