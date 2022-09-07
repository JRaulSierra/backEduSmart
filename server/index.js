const express = require("express");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
var bodyParser = require('body-parser');
const app = express();

// const usuarioModel = require("./models/createUsuario")

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const accessRoutes = require("./api/access");
const modifyRoutes = require("./api/modifyUser");
const deleteRoutes = require("./api/deleteUser");
const clases = require("./api/clases")
const documentos = require("./api/documentCreate")

// aqui establecemos las rutas
app.use("/access",accessRoutes);
app.use("/updateUsuarios",modifyRoutes);
app.use("/deleteUsuarios",deleteRoutes);
app.use("/clases",clases);
// app.use("/documento",documentos)


// app.get("/prueba",(req,res)=>{
//   const mostrar = async ()=>{
//     const usuarios = await usuarioModel.find({email: 'estudiante@gmail.com'})
//     console.log(usuarios)
//     res.send(usuarios)
//   }

//   mostrar()
// })




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
