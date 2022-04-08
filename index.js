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

app.use('/user', user);

app.listen(4000);