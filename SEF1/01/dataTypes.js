const inc1 = (num) => num;
const a = 5; 
const b = inc1(a); 
console.dir({ a, b });

console.log('//////////');

const inc2 = (Num) => {Num.n += 1};
const obj = { n: 5 }; 
inc2(obj); 
inc2(obj); 
inc2(obj); 
console.dir(obj);