const express = require('express');
const app = express();


// Forma de ler o JSON
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.status('200').json({"message":"API Rest funcionando"});
})

// Rotas

const user = require('./routes/user');
const request = require('./routes/request');

app.use('/user', user);
app.use('/request', request);

app.listen(4000);