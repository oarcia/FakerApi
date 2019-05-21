const { Schema, model }  = require('mongoose') //requerimos para el modelado de la bd

const userSchema = new Schema({ //que es un esquema es como vas a guardar tus datos en la BD
    firstName:String,
    lastName: String,
    avatar: String

});

module.exports = model('User', userSchema); //exportamos el archivo y el esquema que queremos mostrar