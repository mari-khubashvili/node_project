const express = require('express')
// require('dotenv').config()

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
}) 