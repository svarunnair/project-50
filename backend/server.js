const express = require("express")
const app=express()
const {conection}=require("./db")


app.get("/",(req,res)=>{
    res.send("Haiiiiiiiiii")
})



app.listen(2020,async()=>{
    try{
    await conection
    console.log("db connected successfully")
    }
    catch(err){
        console.log("db failed to connect",err)
    }
    console.log("listening to 2020...")
    
    
})