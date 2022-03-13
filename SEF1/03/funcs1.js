function random(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(random(10));