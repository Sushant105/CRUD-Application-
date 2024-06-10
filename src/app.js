const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");

const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "./public");
// console.log(path.join(__dirname, "../public"));

app.use(express.static(static_path));

app.get("/",(req,res)=>{
        res.send("hellooooooooooooo")
    });






app.listen(port, ()=>{
    console.log(`conection is setup at ${port}`);
})