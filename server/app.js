const express = require('express')


// config
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended : true}))
app.use(express.json())


//Routes
const router = require('./router')

//Enrutador
app.use('/api', router)

app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`)
})