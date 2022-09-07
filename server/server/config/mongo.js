const mongoose = require('mongoose');

const uri = "mongodb+srv://educasmart:admin@cluster0.lcjxh6x.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(uri);

const database = mongoose.connection;

database.once("open",()=>{
    console.log("conection with moongose open")
})

database.on("error", console.error.bind(console, "mongo conection error"))

module.exports = database;