
require('dotenv').config()
const express = require('express')
const app = express()
const ctrl = require('./controller')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

const PORT = SERVER_PORT

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('db connected')
    })
    .catch(err => console.log(err))

app.get('/api/houselist', ctrl.getHouses)
app.post('/api/addhouse', ctrl.addHouse)
app.delete('/api/deletehouse/:id', ctrl.deleteHouse)

app.listen(PORT, console.log(`Take us to warp ${PORT}!`))