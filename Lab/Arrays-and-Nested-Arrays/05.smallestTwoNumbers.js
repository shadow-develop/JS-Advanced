function smallest(arr) {
    const result = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < 2; i++){
        result.push(arr[i]);
    }
    console.log(result.join(' '))
}

smallest([3,7,1,9,15,2])