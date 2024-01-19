const fs = require('fs');

fs.mkdirSync('thapa');


// file name bio.txt and data in into

fs.writeFileSync('thapa/bio.txt' , ' This is a lec-6 of Thapa techinal');

// adding more data to the file at the end of the existing data

fs.appendFileSync('thapa/bio.txt' , ' of web development)' );

// without buffer value

 const read_data = fs.readFileSync('thapa/bio.txt','utf8')
 console.log(read_data) ;

 // rename file

fs.renameSync('bio.txt' , 'mybio.txt');

// delete everything

fs.unlinkSync('thapa/mybio.txt')

fs.rmdirSync('thapa');

