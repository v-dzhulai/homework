const iface = {
    m1: x => [x],
    
    m2: function (x, y) {
      return [x, y];
    },

    m3(x, y, z) {
      return [x, y, z];
    }
};

const arr = [];

for(let key in iface) {
    const val = iface[key];
    
    if(typeof val === 'function') {
        arr.push(val.name, val.length);
    }
}

console.log(arr);