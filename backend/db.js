const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://athif:Ryzenathif@cluster0.t5pyu.mongodb.net/athifrooms'

mongoose.connect( mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose