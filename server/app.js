// requerimos el modulo express
const express = require('express')
// instanciamos express
const app = express()

// config
const PORT = process.env.PORT || 3000

/* La función express.urlencoded() es una función de middleware integrada en Express. 
Analiza las solicitudes entrantes con cargas útiles codificadas en urlencoded
y se basa en el bodyparser.

 * Permite acceder a la
información del cuerpo de dicha petición.*/

app.use(express.urlencoded({extended : true}))
app.use(express.json())


//Routes
const router = require('./routes')

//Enrutador
app.use('/api', router)

// Servidor a la escucha
app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`)
})