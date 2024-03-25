const mongoose=require("mongoose")

const conection=mongoose.connect("mongodb://127.0.0.1:27017/")




module.exports={conection}
