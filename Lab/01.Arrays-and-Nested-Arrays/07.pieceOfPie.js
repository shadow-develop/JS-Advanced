function pie(arr, pie1, pie2) {
    return arr.slice(arr.indexOf(pie1), arr.indexOf(pie2) + 1);
    // const start = arr.indexOf(pie1);
    // const end = arr.indexOf(pie2) + 1;
    // const result = arr.slice(start, end);
    // return result
}

console.log(pie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie'));