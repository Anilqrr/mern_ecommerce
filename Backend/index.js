const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoter = require('./api/Users')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json({limit:'1mb'}))
main().catch(()=>console.log('error'))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    console.log('connect')
}

app.use('/',userRoter.routers)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))