const path = require('path');

console.log(path.dirname('/Users/rishabhraj/Desktop/NODE JS ( Thapa Technical )/Path modules/path.js'));
console.log(path.extname('/Users/rishabhraj/Desktop/NODE JS ( Thapa Technical )/Path modules/path.js'));
console.log(path.basename('/Users/rishabhraj/Desktop/NODE JS ( Thapa Technical )/Path modules/path.js'));

console.log(path.parse('/Users/rishabhraj/Desktop/NODE JS ( Thapa Technical )/Path modules/path.js'));

const myPath =path.parse('/Users/rishabhraj/Desktop/NODE JS ( Thapa Technical )/Path modules/path.js');
// console.log(myPath.name);
console.log(myPath.root);