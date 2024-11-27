require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => { // request and response 
  res.send('Hello World!')
})

app.get('/broker' , (req, res) => {
    res.send('Broker is running')
})

app.get('/login' , (req , res) => {
    res.send('<h1> Get yourself a Username and Password </h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})