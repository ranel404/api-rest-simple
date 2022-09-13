const router = require('express').Router()
const cervezas = require('./cervezas')

router.use('/cervezas', cervezas)

router.get('/',(req,res)=>{
    res.status(200).json({message: 'Estas conectado a nuestra API'})
})

module.exports = router