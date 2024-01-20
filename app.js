const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/aliendbex'

const app = express()

mongoose.connect(url, {useNewurlParser:true})


const con = mongoose.connection

con.on('open',() => {
    console.log("connected.....")
})

    app.use(express.json())

const alienRouter = require('./router/aliens')
app.use('/aliens',alienRouter)

app.listen(8080,() => {
    console.log("server started")
})