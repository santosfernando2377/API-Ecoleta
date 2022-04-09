const mongoose = require('mongoose');

const User = mongoose.model('user',{
    nome: String,
    endereco: String,
    telefone: String,
    email: String,
    senha: String,
    excluido: Boolean,
    dataExcluido: String
})

module.exports = User