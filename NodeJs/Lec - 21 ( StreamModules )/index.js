const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request' , (req , res) => {

//  fs.readFile('input.txt' , function(err , data){
//     if(err) return console.error(err);
//     console.log(data.toString());
//  });


 //2nd way 
 // Reading from a Stream
 // Create a readable stream
 // Handle stream events -> data , end , and error

 const rstream = fs.createReadStream('input.txt');

 rstream.on('data' , (chunkdata) => {
   res.write(chuckdata);
 });

 rstream.on('end' , () => {
   res.end();
 });

 rstream.on('error' , (err) => {
   console.log(err);
   res.end("File not found");
 });

});

server.listen(8000, '127.0.0.1') ;