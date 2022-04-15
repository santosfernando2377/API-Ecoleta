const router = require('express').Router()
const request = require('../model/request')

router.get('/', async (req, res) => {
    const {email} = req.body

    const User = {
        email    
    }

    try {
        const response = await request.find(User);
        return res.status(200).json({"message": response})
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error})
    }
})

router.post('/', async (req, res) => {
    const {solicitante, endereco, itens, email, dataPedido, dataCancelamento, dataConclusao, status } = req.body

    const User = {
        solicitante,
        endereco,
        email,
        itens,
        status,
        dataPedido,
        dataCancelamento,
        dataConclusao
    }

    try {
        const response = await request.create(User);
        return res.status(200).json({"message": response});
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error});
    }
})

router.patch('/', async (req, res) => {
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
        await request.updateOne()
        return res.status(200).json({"message": User})
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error})
    }
})

module.exports = router