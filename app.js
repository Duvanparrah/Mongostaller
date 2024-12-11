const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const comidasRoutes = require('./routes/proyectos');
const app = express();
const PORT = process.env.NUBE;
//BODY json
app.use(express.json());
// Middleware
app.use(bodyParser.json());



// Conexión a MongoDB
mongoose.connect(process.env.URL_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Buscando a MongoDB¡ Yahuuu!'))
.catch(err => console.error('Algo se desconecto y no fue el internet:', err));

// Rutas
app.use('/api/comidas', comidasRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log("El servidor esta cansado de correr jefe!, en el puerto:" + PORT);
});
