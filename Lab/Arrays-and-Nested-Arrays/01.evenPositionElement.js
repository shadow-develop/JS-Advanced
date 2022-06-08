function even(arr) {
    const evenArr = [];
    for (let i = 0; i < arr.length; i += 2) {
            evenArr[evenArr.length] = arr[i];
    }
    console.log(evenArr.join(' '));
}

even(['20', '30', '40', '50', '60'])