const app = require('./app'); // requerimos app que es el que tiene la configuracion de express
const { connect } = require('./database');


async function main(){
    //Database cONNECTION
    await connect(); //por que el await por que el server nesecita tiempo para conectarse
    //express Application
    await app.listen(4000) //el await es para que el servidor espere unos segundo recuer asinc await
    console.log('Server on port 4000: Conected')
}

main();