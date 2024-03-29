const express = require('express');
const hbs = require('hbs')

const app =express();

const port = 8000;

// to set the view engine we use partilpath matter

const templatePath = path.join(__dirname, './templates')
const partialPath = path.join(__dirname, '../templates/partials')

// How to chnange views name here hbs means handlebars

app.set('view engine' , 'hbs');
app.set('views ' , templatePath);

// template engine route

app.get("",(req , res) => {
    res.render(index);
})


// 404 Method

app.get("*",(req , res) => {
    res.render("404" , {
        errorComponent :"oops page could not be found "
    });
})

// app.use(express.static)

app.get("/" , (req , res) => {
    res.send("Hello everyone");
})

app.listen(port, () => {
    console.log(`Server is listing at ${port}`)
})
