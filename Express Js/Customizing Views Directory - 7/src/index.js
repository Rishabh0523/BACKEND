const express = require('express');

const app =express();

const port = 8000;

// to set the view engine

const templatePath = path.join(__dirname, './templates')

// How to chnange views name

app.set('view engine' , 'hbs');
app.set('views ' , templatePath);

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
