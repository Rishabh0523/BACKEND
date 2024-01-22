const express = require('express');

const app =express();

const port = 8000;

// to set the view engine

app.set('view engine' , 'hbs');

// template engine route

app.get("",(req , res) => {
    res.render(index);
})

// app.use(express.static)

app.get("/" , (req , res) => {
    res.send("Hello everyone");
})

app.listen(port, () => {
    console.log(`Server is listing at ${port}`)
})
