const express = require("express");
const router = express.Router();
const claseModel = require("../models/clasesModelo");

// validacion si el usuario existe
// router.post("/crearClase"), async function (req,res) {
//   const {img,nombre,descripcion} =
//   console.log(img);
// };

router.get("/clasesData", async function (req, res) {
  const clases = await claseModel.find({});
  res.send(clases);
});

router.post("/delete", async function (req, res) {
  var data = req.body.clase;
  await claseModel.deleteOne({ clase: data.c });
  res.send(true);
});

router.post("/update", async function (req, res) {
  const { img, nombre, descripcion, key } = req.body;
  
  if (img !== "") {
    await claseModel.updateOne({ clase: key }, { $set: { imagen: img } });
  }
  if (descripcion !== "") {
    await claseModel.updateOne(
      { clase: key },
      { $set: { informacion_clase: descripcion } }
    );
  }
  res.send(true);
});

router.post("/crearClase", function (req, res) {
  const { img, nombre, descripcion } = req.body;
  const result = new claseModel({
    imagen: img,
    informacion_clase: descripcion,
    clase: nombre,
  });
  result.save(function (err) {
    if (err) return handleError(err);
  });
});

module.exports = router;
