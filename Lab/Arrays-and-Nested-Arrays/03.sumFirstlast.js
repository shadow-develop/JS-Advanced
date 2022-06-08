function calculate(arr) {
    return Number(arr.pop()) + Number(arr.shift());
}

console.log(calculate(['20', '30', '40']))