const express = require('express'); //requerimos express
const app = express();

const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev')); //configuracion de morgan tipo dev invetiga las demas
app.use(cors());//cors es las nuevas de cors creamos el archivo user dentro de routes

app.use(require('./routes/user')); // estas requeriendo el archivo de las rutas

module.exports = app; //exportamos el modulo