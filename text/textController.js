const express = require('express');
const router = express.Router();
const texts = require("./text.js");

router.post("/texts/create", (req,res)=>{
    var text = req.body.text;
            texts.create({
                text: text
            }).then(()=>{
                res.redirect("/");
            }).catch(()=>{
                res.redirect("/");
            })
});

module.exports = router;