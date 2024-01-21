const express = require('express');

const app = express()

app.get("/",(req , res)=> {
    res.send("Hello everyone")
})


app.get("/about",(req , res)=> {
    res.send("Hello about ")
})

app.listen(8000, () => {
    console.log("Port at 8000");
});