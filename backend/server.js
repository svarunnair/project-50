const express = require("express")
const app=express()


app.get("/",(req,res)=>{
    res.send("Haiiiiiiiiii")
})



app.listen(2020,()=>{
    console.log("listening to 2020....")
})