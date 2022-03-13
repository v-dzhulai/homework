const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];
const val = { number: 0, string: 0, boolean: 0 };

for (const i of arr) {
    val[typeof i] += 1;
}

console.log(val);