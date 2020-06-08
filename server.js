const express = require('express')
const bodyParser = require("body-parser");
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.set('view engine', 'ejs')

const routes = require('./src/routes')
app.use('/', routes);

app.listen(port, err => {
    if (err) {
        console.log('Não foi possível iniciar o servidor')
    } else {
        console.log('Servidor Ok')
    }
})
