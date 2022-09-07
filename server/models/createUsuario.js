const mongoose = require('mongoose');
const database = require("../config/mongo")
const usuarioSchema = require("../schema/schema-usuarios/schema-usuarios")

const usuarioModel = mongoose.model("usuario",usuarioSchema);


module.exports = usuarioModel;