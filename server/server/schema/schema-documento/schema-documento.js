const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const documentoSchema = new Schema({
    "clase": String,
    "imagen": String,
    "informacion_clase": String,
    "documentos": Array,
})

module.exports = documentoSchema;