const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    "name": String,
    "username": String,
    "Role": String,
    "clases": Array,
    "activo": Boolean,
    "email": String,
    "telefono": String
})

module.exports = usuarioSchema;