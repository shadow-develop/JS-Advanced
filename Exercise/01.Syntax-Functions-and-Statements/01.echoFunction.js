function solve(text) {
    let sum = 0
    for (let ch = 0; ch < text.length; ch++) {
        sum += 1
    }
    console.log(`${sum} \n${text}`)
}

solve("Hello, JavaScript!")