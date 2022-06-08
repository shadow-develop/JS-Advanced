function solve(a, b, c) {
    let sumLength = a.length + b.length + c.length; 
    let sumAverage = Math.floor(sumLength / 3);
    
    console.log(`${sumLength}\n${sumAverage}`);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');