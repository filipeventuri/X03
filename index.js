const express = require("express");
require("dotenv").config()
const bodyParser = require('body-parser');
const connection = require("./database/db.js");
const textController = require("./text/textController.js");
const texts = require("./text/text.js");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", textController);

app.get("/", (req,res)=>{
    res.render("index");  
});

app.get("/textForm",(req,res)=>{
    res.render("form");
});

app.get("/print", (req,res)=>{
    texts.findAll().then(text=>{
        res.render("lista", {text:text} );
    })
    
});

connection.authenticate().then(()=>{
    console.log("Database acessed")
}).catch((err)=>{
    console.log("err: " + err);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});