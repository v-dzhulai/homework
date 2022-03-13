const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(average(square(i), cub(i)));
}

console.log(calculate(arr));

function average(num1, num2) {
    return (num1 + num2) / 2;
}

function square(num) {
    return num ** 2;
}

function cub(num) {
    return num ** 3;
}

function calculate(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}