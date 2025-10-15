const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));

app.post("/register",(req,res)=>{
  const {fullname,email,phone,password} = req.body;
  if(!fullname || !email || !phone || !password){
    return res.status(400).json({message:"All fields are required"});
  }

  const filePath = path.join(__dirname,"students.json");
  let students = [];
  if(fs.existsSync(filePath)){
    students = JSON.parse(fs.readFileSync(filePath,"utf-8"));
  }

  students.push({fullname,email,phone,password});
  fs.writeFileSync(filePath,JSON.stringify(students,null,2));

  res.json({message:
