const path = require('path');
const express = require('express');

const app = express();

// console.log(__dirname)

// console.log(path.join(__dirname , '../public'));

const staticPath = path.join(__dirname , '../public')

app.use(express.static(staticPath))

app.get("/",(req , res)=> {
    res.send("Hello everyone")
})


app.get("/about",(req , res)=> {
    res.send("Hello about ")
})

app.listen(8000, () => {
    console.log("Port at 8000");
});