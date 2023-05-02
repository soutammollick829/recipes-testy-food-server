/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 5000

app.use(cors())

const chefDetails = require("./data/data.json")

app.get('/',(req , res)=>{
    res.send('server is running')
})

app.get('/chef',(req, res) =>{
res.send(chefDetails)
})

app.listen(port, ()=>{
    console.log("server is running on port 5000")
})