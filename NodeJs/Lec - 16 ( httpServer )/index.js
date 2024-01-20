const http = require ("http");

const server = http.createServer((req, res) =>{

    // console.log(req.url);
    if(req.url = "/") {
        res.end('Hello from the home side');
    }
    else if(req.url = "/about"){
        res.end("Hello from AboutUs side");
    }
    else if (req.url ="/Contact") {
        res.end("Hello from ContactUs side")
    }
    else{
        res.writeHead(404 , {"Content-type" : "text/html" });
        res.end(" <h1> 404 error.page does not exist </h1> ");
    }
}); 


server.listen(8000,'127.0.0.1' , () => {
    console.log("listing to the port no 8000")
});
 