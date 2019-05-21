const { Router }= require('express');
const router = Router();
const faker = require('faker');//requerimos faker para insertar datos de prueba

const User = require('../models/user');

router.get('/api/users', async(req, res) =>{ //creamos dos rutas una donde muestre los usuarios
     users = await User.find();
     res.json({users});//con esta parte metemos en un arreglo los usuarios que vamos a ver en la app
    //res.json('User list');
});

router.get('/api/users/create',async(req, res) =>{ //ruta donde crea los usuarios igual el server es por que tarda en guarda en la bd
    for (let i = 0; i <= 5; i++) {
        await User.create({
            firstName: faker.name.firstName(), //en esta parte de prueba requerimos faker para crear nombre por default
            lastName: faker.name.lastName(), //apellido por default con faker 
            avatar: faker.image.avatar() //imagen por default con faker
        });
    }
    res.json({message: '5 Users created'});
})

module.exports = router;//exportamos el modulo