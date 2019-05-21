const mongoose = require('mongoose');//nos conecta ala base de datos

async function connect(){
    await mongoose.connect('mongodb://localhost/flutterApp',{ //el await recuerda que la conexion a servidor tarda por eso nesecita
        useNewUrlParser:true //para que no mande error la conexion ala db
    });
    console.log('Datatabase:Connected');
};

module.exports = { connect }; //se exporta dentro d eun objeto es para importarlo desde otro objeto
//asi llamos la funcion solamente y no todo el mundo