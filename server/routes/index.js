// Archivo principal de rutas

// Instanciamos el metodo Router de express
const router = require('express').Router()

// Importamos rutas
const cervezas = require('./cervezas')


// Uso de rutas
router.use('/cervezas', cervezas)

router.get('/',(req,res)=>{
    res.status(200).json({message: 'Estas conectado a nuestra API'})
})

module.exports = router