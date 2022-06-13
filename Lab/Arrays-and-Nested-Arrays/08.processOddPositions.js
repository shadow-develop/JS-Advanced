function process(arr) {
    return arr
    .filter((_, i) => i % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    .join(' ')
}

console.log(process([10, 15, 20, 25]))