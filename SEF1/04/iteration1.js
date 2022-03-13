function sum(...args) {
    // let sum = 0;

    // for(let i = 0; i < args.length; i++) sum += args[i];
    // for (const i of args) sum += i;

    // let i = 0;

    // while (i < args.length) {
    //     sum += args[i];
    //     i++;
    // }

    // do {
    //     sum += args[i];
    //     i++;
    // } while (i < args.length);

    // return sum || 0;

    return args.reduce((sum, cur) => sum + cur, 0);
}

const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);