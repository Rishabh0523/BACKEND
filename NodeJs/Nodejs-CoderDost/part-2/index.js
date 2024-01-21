const http = require('http');

const data ={age:5};

const server = http.createServer((req,res)=>{
    console.log('server stared');
    res.setHeader('Dummy','Dummy value')
    res.setHeader('content-type','applicaion/json')
    res.end(JSON.stringify(data));

})

server.listen(8080);