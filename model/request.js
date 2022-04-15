const mongoose = require("mongoose");

const Request = mongoose.model('request', {
    solicitante:String,
    endereco:String,
    email:String,
    itens:Array,
    status:String,
    dataPedido:String,
    dataCancelamento:String,
    dataConclusao:String
})

module.exports = Request