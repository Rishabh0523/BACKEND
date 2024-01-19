const os = require("os");

// console.log(os.arch());

console.log(os.type());

console.log(os.hostname());

console.log(os.platform());

const freeMemory = os.freemem();
console.log(freememory);

console.log(`${freeMemory/1024/1024/1024}`);

const totalMemory = os.totalMemory();
console.log(freememory);

console.log(`${totalMemory/1024/1024/1024}`);