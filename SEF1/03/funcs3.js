function ipAdress(ip = '127.0.0.1') {
    const arr = ip.split('.').map(x => +x);
    
    arr[0] = arr[0] << 8 << 8 << 8;
    arr[1] = arr[1] << 8 << 8;
    arr[2] = arr[2] << 8;

    return arr.reduce((sum, current) => sum + current, 0);
}

console.log(`127.0.0.1       -> ${ipAdress()}`);
console.log(`10.0.0.1        -> ${ipAdress('10.0.0.1')}`);
console.log(`192.168.1.10    -> ${ipAdress('192.168.1.10')}`);
console.log(`165.225.133.150 -> ${ipAdress('165.225.133.150')}`);
console.log(`0.0.0.0         -> ${ipAdress('0.0.0.0')}`);
console.log(`8.8.8.8         -> ${ipAdress('8.8.8.8')}`);