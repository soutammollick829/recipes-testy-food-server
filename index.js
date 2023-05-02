/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 5000

app.use(cors())

const chefDetails = require("./data/data.json")
const recipes = require('./data/recipes.json')

app.get('/',(req , res)=>{
    res.send('server is running')
})

app.get('/chef',(req, res) =>{
res.send(chefDetails)
})

app.get('/chef/:id', (req , res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedId = chefDetails.find(d => d.id == id);
    res.send(selectedId)
})

app.get('/recipes',(req,res)=>{
    res.send(recipes)
})

app.listen(port, ()=>{
    console.log("server is running on port 5000")
})