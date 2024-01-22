const express = require('express');

const app =express();

const port = 8000;

app.use(express.static)

app.get("/" , (req , res) => {
    res.send("Hello everyone");
})

app.listen(port, () => {
    console.log(`Server is listing at ${port}`)
})

