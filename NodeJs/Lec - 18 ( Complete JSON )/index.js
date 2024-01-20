const fs = require('fs');

// JSON stands for JavaScript object Notation . 
// JSON is a lightweight format for storing and transporting data. 
// JSON is often used when data is sent from a server to a web page.


const bioData = {

    name : "Rishabh",
    age : 21,
    channel : "Thapa Technical",
};


// 1: Convert to JSON ---> Done
// 2: Add into secod file ---> Done
// 3: readfile
// 4: Again convert back to js obj ori
// 5: console.log

// 1.
const jsonData = JSON.stringify(bioData);

// 2.
fs.writeFile('json1.json', "jsonData",(err) => {
  console.log("done")
})

// 3.

fs.readFile("json1.json" ,"utf-8" , (err , data) => {
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})



// console.log(bioData.channel) 

// const jsonData = JSON.stringify(bioData);
// // console.log(jsonData.channel); // we will not get output

// const objData = JSON.parse(jsonData);

// console.log(objData) ; 