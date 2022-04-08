const router = require("express").Router()

router.get('/', (req, res) => {
    const { email, senha } = req.body

    const User = {
        email,
        senha
    }

    try {
        return res.status(200).json({"message": User})
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error})
    }
})

router.post('/', (req, res) => {
    const { nome, endereco, telefone, email, senha } = req.body

    const User = {
        nome,
        endereco,
        telefone,
        email,
        senha,
        excluido
    }

    try {
        return res.status(200).json({"message": User})
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error})
    }
})

router.put('/', (req, res) => {
    const {email} = req.query

    if (!email || email == undefined) {
        res.status(500).json({"message":"Não foi identificado o parâmetro email"})
    }

    const { senha } = req.body

    const User = {
        email,
        senha
    }

    try {
        return res.status(200).json({"message": User})
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error})
    }

})

router.delete('/', (req, res) => {
    const {email} = req.query

    const User = {
        email
    }

    try {
        return res.status(200).json({"message": User})
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error})
    }
})

module.exports = router