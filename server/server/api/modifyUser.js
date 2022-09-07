const express = require("express");
const router = express.Router();
const admin = require("../config/firebase");
const usuarioModel = require("../models/createUsuario");

// este modifica nuestro json de nuestros usuarios
router.post("/modify", async function (req, res) {
  var data = req.body.User;
  var usuario = {
    name: data.name,
    username: data.username,
    Role: data.Role,
    clases: data.clases,
    activo: data.activo,
    email: data.email,
    telefono: data.telefono,
  };
  await usuarioModel.updateOne({ email: data.email }, { $set: usuario });
});

router.get("/usuarios", async function (req, res) {
  const usuarios = await usuarioModel.find({});
  res.send(usuarios);
});

// crea un usuario nuevo en firebase
router.post("/create", function (req, res) {
  console.log(req.body.title);
  var data = req.body.User;
  console.log(data);
  var usuario = new usuarioModel({
    name: data.name,
    username: data.username,
    Role: data.Role,
    clases: data.clases,
    activo: data.activo,
    email: data.email,
    telefono: data.telefono,
  });
  admin
    .auth()
    .createUser({
      email: data.email,
      emailVerified: false,
      password: data.password,
      displayName: data.name,
      photoURL: "http://www.example.com/12345678/photo.png",
      disabled: false,
    })
    .then(async () => {
      await usuario.save();
    });
});

module.exports = router;
