const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();


// Forma de ler o JSON
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(cors())

app.get('/', (req, res) => {
    res.status('200').json({"message":"API Rest funcionando"});
})

// Rotas

const user = require('./routes/user');
const request = require('./routes/request');

app.use('/user', user);
app.use('/request', request);

mongoose.connect('mongodb://localhost:27017/ecoleta')
.then(() => {
    console.log("Estamos conectados ao MongoDB");
    app.listen(4001);
})
.catch((error) => {
    console.log({"message":"Não foi possível iniciar a API","details": error});
})