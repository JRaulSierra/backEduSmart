const express = require("express");
const router = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const admin = require("../config/firebase");
const usuarioModel = require("../models/createUsuario");

router.post("/delete", async function (req, res) {
  var data = req.body.User;
  await usuarioModel.deleteOne({ email: data.email });
  admin
    .auth()
    .getUserByEmail(data.email)
    .then((userRecord) => {
      var usuario = userRecord.toJSON();
      admin
        .auth()
        .deleteUser(usuario.uid)
        .then(() => {
          console.log("Successfully deleted user");
        })
        .catch((error) => {
          console.log("Error deleting user:", error);
        });
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
});

module.exports = router;
