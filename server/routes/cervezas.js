const router = require('express').Router()

router.get('/search', (req,res)=>{
    res.json({message: "Vas a buscar una cerveza"})
})

router.get('/', (req,res)=>{
    res.json({message: "Estas conectado a la API. Recurso: Cervezas"})
})

router.get('/:id', (req,res) =>{
    res.json({message: "Vas a obtener la cerveza con id" + req.params.id})
})

router.post('/', (req,res)=>{
    res.json({message: "Vas a añadir una cerveza con id" + req.params.id})
})

router.put('/:id', (req,res) =>{ 
    res.json({message: "Vas a actualizar una cerveza con id" + req.params.id})
})

router.delete('/:id', (req,res) =>{ 
    res.json({message: "Vas a eliminar una cerveza con id" + req.params.id})
})

module.exports = router
