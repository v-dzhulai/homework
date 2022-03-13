const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9

function max(arr) {
    let val = 0;

    for(let i of arr) {
        for(let j of i) {
            if(j > val) val = j;
        }
    }

    return val;
}