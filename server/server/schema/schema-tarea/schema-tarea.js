const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const claseSchema = new Schema({
    "clase": String,
    "imagen": String,
    "informacion_clase": String,
})

module.exports = claseSchema;