const fs = require('fs');

// const data = fs.readFileSync('read.txt', utf-8)
// console.log(data);

// Jab tak pura upar ka data print n ho jaye tab tak ye agala work nhi krtaa
// This is sync version , agar 10 sec ruknaa hua toh 10 sec baad hi value aayega

const data = fs.readFile('read.txt' , 'utf-8', (err , data) => {
    console.log(data)
}) ;
console.log("after the data");

fs.rename('read.txt' , 'hello.txt')