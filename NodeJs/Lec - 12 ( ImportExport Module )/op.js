const add = (a,b) => {
return a+b;
};

const subtract = (a,b) => {
return a-b;
};

const name = 'Rishabh';

module.exports.add = add();
module.exports.subtract = subtract();
module.exports.multi = multi();


module.exports = {add , subtract , multi}