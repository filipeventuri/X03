const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req,res)=>{
   
    res.render("index");
    
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
});