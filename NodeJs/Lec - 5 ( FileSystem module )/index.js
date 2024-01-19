const fs = require("fs");

//  ( 1 ) Creating a new file

// fs.writeFileSync('read.txt' ,"Welcome to my World");

fs.writeFileSync('read.txt' ," of , Web Development");
// fs.appendFileSync('read.txt' , "How it is going ?");



// ( 2 )  fs.readFileSync('read.txt'); 

// Node.js includes an additional data type called  Buffer
// Not available in browser's JavaScript
// Buffer is mainly used to store binary data
// While reading from a file or receiving packets over the network

// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

/* <Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 57 6f 72 6c 64 20 6f 66 20 2c 20 57 65 62 20 44 65 76 65 6c 6f 70 6d 65 6e 74 0a 48 6f 77 20 69 74 20 69 73 ... 8 more bytes> */

// org_data = buf_data.toString();
// console.log(org_data);



// To rename the File

// fs.renameSync('read.txt' , 'readwrite.txt'); 



