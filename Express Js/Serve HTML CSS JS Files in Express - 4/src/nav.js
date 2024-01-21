const express = require('express');

const app =express()

app.get('/', (req , res) => {
 res.send("Welcome to Home Page")
})

app.get('/about',(req,res)=> {
    res.send('Welcome to About us Page')
})

app.get('/contact',(req , res)=> {
    res.send("Welcome to Contact us page")
})

app.get('/footer',(req,res)=>{
    res.send("Welcome to Footer page")
})

app.listen(8000 , () => {
    console.log("Server is Listing")
})