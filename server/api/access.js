const express = require("express");
const router = express.Router();
const admin = require("../config/firebase");
const usuarioModel = require("../models/createUsuario");

const { validateSession } = require("../middlewares/authentication");

// validacion si el usuario existe
router.use(validateSession);

router.post("/accessApprove", async function (req, res) {
  const accessToken = req.headers.authorization;
  await admin
    .auth()
    .verifyIdToken(accessToken.split(" ")[1])
    .then(async (decodedToken) => {
      await usuarioModel
        .find({
          email: decodedToken.email,
        })
        .then((usuario) => {
          if (usuario[0].activo == true) {
            res.json(usuario[0]);
          } else {
            res.json({ activo: false });
          }
        });
    });
});

module.exports = router;
