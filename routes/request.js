const router = require('express').Router()

router.get('/', (req, res) => {
    const {solicitante, status, dataPedido, dataConclusao} = req.body

    const User = {
        solicitante,
        status,
        dataPedido,
        dataConclusao
    }

    try {
        return res.status(200).json({"message": User})
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error})
    }
})

router.post('/', (req, res) => {
    const {solicitante, endereco, itens, dataPedido, dataCancelamento, dataConclusao, status } = req.body

    const User = {
        solicitante,
        endereco,
        itens,
        status,
        dataPedido,
        dataCancelamento,
        dataConclusao
    }

    try {
        return res.status(200).json({"message": User})
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error})
    }
})

router.patch('/', (req, res) => {
    const {id} = req.query
    const {solicitante, endereco, itens, dataPedido, dataCancelamento, dataConclusao, status } = req.body

    const User = {
        solicitante,
        endereco,
        itens,
        dataPedido,
        dataCancelamento,
        dataConclusao,
        status
    }

    try {
        return res.status(200).json({"message": User})
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error})
    }
})

module.exports = router