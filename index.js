// console.log(__dirname, __filename)

// import fs from 'fs/promises';

// let main = async ()=>{
//     console.log("Starting...")
//     fs.writeFileSync('anuj2.txt','He is loving with her friend')
//     fs.readFile('anuj2.txt', (error, data)=>{
//         console.log(error, data.toString());
//     })
//     console.log("ending")
// }

// main();

// fs.appendFile('anuj.txt', '. I am best', (error, data)=>{})

// import path from 'path'

// let mypath = 'C:\\Users\\anujv\\OneDrive\\Documents\\CSE PROJECTS\\CodeShare Project\\anuj.txt'

// console.log(path.extname(mypath))
// console.log(path.dirname(mypath))
// console.log(path.basename(mypath))

// console.log(path.join('c:/', 'programs\\anuj.txt'))

// const http = require('node:http');
// const express = require('express')
// const app = express()
// const hostname = '127.0.0.1';
// const port = 3000;

// app.use(express.static('public'))

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//     res.send('hello world')
//   })

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/about', (req, res) => {
//     res.send('About us')
// })

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Express

// const express = require("express");
// const fs = require("fs");
// const app = express();
// const port = 3000;

// const blog = require("./routes/blog");
// const shop = require("./routes/shop");

// app.use(express.static("public"));
// app.use("/blog", blog);
// app.use("/shop", shop);

// app.use((req, res, next) => {
//   req.anuj = "I am bad boy.";
//   // fs.appendFileSync("anuj.txt", `Date : ${Date.now()} is a ${req.method}\n`);
//   console.log(`Date : ${Date.now()} is a ${req.method}`);
//   next();
// });

// app.use((req, res, next) => {
//   req.anuj = "I am good boy.";
//   console.log("m2");
//   next();
// });

// app.get("/", (req, res) => {
//   console.log("Hello Get World!");
//   res.send("Hello Get World!" + req.anuj);
// });

// app.post("/", (req, res) => {
//   console.log("Hello Post World!");
//   res.send("Hello Post World!");
// });

// app.put("/", (req, res) => {
//   console.log("Hello Put World!");
//   res.send("Hello Put World!");
// });

// app.delete("/", (req, res) => {
//   console.log("Hello Delete World!");
//   res.send("Hello Delete World!");
// });

// app.get("/index", (req, res) => {
//   console.log("Hello Index World!");
//   res.sendFile("templates/index.html", { root: __dirname });
// });

// app.get("/api", (req, res) => {
//   console.log("Hello API");
//   res.json({ a: 1, b: 2, c: 2, name: ["Anuj", "Harry"] });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require("express");
const blog = require("./routes/blog");
const app = express();
const port = 3000;

// Set ejs engine
app.set('view engine', 'ejs');
// Blog Router
app.use("/blog", blog);
// static files in express 
// app.use(express.static("public"));
// Send HTML file 
// app.get("/", (req, res) => {
//   res.sendFile("templates/index.html", { root: __dirname });
// });

// Send ejs file
app.get("/", (req, res) => {
  let brand_name = "Adidas"
  let siteText = "Find your favourite Shoes Here" 
  let searchText = "Search Now"
  res.render("app", {brand_name : brand_name, siteText : siteText, searchText : searchText});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
