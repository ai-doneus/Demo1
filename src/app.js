const express = require("express");
const app = express();
app.get("/",(req,res)=>{res.json({message:"helloworld"})});
module.exports = app;