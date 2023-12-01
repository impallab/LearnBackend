require("dotenv").config();
const express= require("express");
const app=express();
const port=3000;
let user="Pallab"
app.get('/',(req,res)=>{
    res.send("Hello World !");
})

app.get("/user",(req,res)=>{
    res.send(`Welcome ${user} `);
})

app.get("/login",(req,res)=>{
    res.send("<h2>Register Yourself </h2><a href=https://google.com>Google</a>")
})

app.listen(process.env.PORT,()=>{
    console.log(`App listening on port ${port}`)
})