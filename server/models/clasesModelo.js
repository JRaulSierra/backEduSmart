const mongoose = require('mongoose');
const database = require("../config/mongo")
const claseSchema = require("../schema/schema-tarea/schema-tarea")

const claseModel = mongoose.model("clase",claseSchema);



module.exports = claseModel;