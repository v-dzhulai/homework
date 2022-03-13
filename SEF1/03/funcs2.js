function generateKey(length, characters) {
    let str = '';
    
    for(let i = 0; i < length; i++) {
        str += characters[Math.floor(Math.random() * length)];
    }

    return str;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);