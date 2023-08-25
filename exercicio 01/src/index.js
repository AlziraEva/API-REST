const express = require('express')
const app = express()
const rotas = require('./rotas')

app.use(express.json()) //transitar informações no formato json

app.use(rotas)

app.listen(3000)