const phones = [
    { name: 'Viktor Dzhulai',   phone: '+380931136853' },
    { name: 'Marcus Aurelius',  phone: '+380445554433' },
    { name: 'Yana Vasylyshina', phone: '+380312312124' },
    { name: 'J1ger',            phone: '+380736538453' },
    { name: 'Olexandra',        phone: '+380445232342' },
];

function findPhoneByName(name) {
    for(let i of phones) {
        if(i[name] === name) return i.phone;
    }

    return;
}

console.log(findPhoneByName('Viktor Dzhulai'));