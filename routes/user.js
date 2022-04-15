const router = require("express").Router()
const user = require('../model/user')

router.get('/', async (req, res) => {
    const { email } = req.query

    const User = {
        email
    }

    try {
        const response = await user.findOne(User)
        return res.status(200).json({"message": response})
    } catch (error) {
        return res.status(500).json({"message":"Erro de processamento!", "details": error})
    }
})

router.post('/', async (req, res) => {
    const { nome, endereco, telefone, email, senha, excluido } = req.body

    if(!email && !senha){
        return res.status(422).json({"message":"Não foi possível gravar o email/senha"})
    }

    const User = {
        nome,
        endereco,
        telefone,
        email,
        senha,
        excluido
    }

    try {
        const response = await user.create(User)
        return res.status(200).json({"message": response})
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