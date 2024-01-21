const express = require('express');

const app =express()

app.get('/', (req , res) => {
 res.write("Welcome to Home Page");
 res.write("Welcome to Home Page again")
 res.send()
})

app.get('/about',(req,res)=> {
    res.send('<h1>Welcome to About us Page</h1>')
})

app.get('/contact',(req , res)=> {
    res.send("Welcome to Contact us page")
})

app.get('/footer',(req,res)=>{
    res.send([{
        id: 1 ,
        name: "Rishabh" ,
    },
    {
    id: 2 ,
        name: "Rishabh" ,
    },
    
]);
})

app.listen(8000 , () => {
    console.log("Server is Listing")
})