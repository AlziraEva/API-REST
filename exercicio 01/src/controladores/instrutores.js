let { instrutores, identificadorInstrutor, identificadorAulas } = require('../bancodedados') // desestruturação  do bancosdedados


const listarInstrutores = (req, res) => {
    return res.status(200).json(instrutores)
}

const obterInstrutor = (req, res) => {
    const { id } = req.params   // foi pego o parametro de rota (id)
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id) // se tiver o id, irá ser retornardo ele.
    })
    if (!instrutor) { // instrutor não encontrado
        return res.status(404).json({ mensagem: 'instrutor não encontrado' }) //servidor não pode encontrar o recurso
    }
    return res.status(200).json(instrutor) // mostra o instrutor encontrado
}

const cadastrarInstrutor = (req, res) => {
    const { nome, email, status } = req.body // recupera propriedades do corpo da requisição
    if (!nome) { // tem que ser informado no corpo da requisição
        return res.status(400).json({ mensagem: 'o nome é obrigatório' })
    }
    if (!email) { // tem que ser informado no corpo da requisição
        return res.status(400).json({ mensagem: 'o email é obrigatório' })
    }
    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true
    }
    instrutores.push(instrutor)

    return res.status(201).json(instrutores)

}

const alterarInstrutor = (req, res) => {
    const { id } = req.params // id do instrutor que vai alterar
    const { nome, email, status } = req.body // recupera propriedades do corpo da requisição
    if (!nome) { // tem que ser informado no corpo da requisição
        return res.status(404).json({ mensagem: 'o nome é obrigatório' })
    }
    if (!email) { // tem que ser informado no corpo da requisição
        return res.status(404).json({ mensagem: 'o email é obrigatório' })
    }
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id) // verifica sem tem o mesmo id.
    })
    if (!instrutor) { // instrutor não encontrado
        return res.status(404).json({ mensagem: 'instrutor não encontrado' }) //servidor não pode encontrar o recurso
    }
    instrutor.id = identificadorAulas
    instrutor.nome = nome
    instrutor.email = email
    instrutor.status = status


    res.status(204).send()

}

const alterarParteInstrutor = (req, res) => {
    const { id } = req.params // id do instrutor que vai alterar
    const { status } = req.body // recupera propriedades do corpo da requisição
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id) // verifica sem tem o mesmo id.
    })
    if (!instrutor) { // instrutor não encontrado
        return res.status(404).json({ mensagem: 'instrutor não encontrado' }) //servidor não pode encontrar o recurso
    }

    instrutor.status = status
    return res.status(204).send()

}

const excluirInstrutor = (req, res) => {
    const { id } = req.params
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })
    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado' }) //servidor não pode encontrar o recurso
    }

    instrutores = instrutores.filter((instrutor) => { // modifica o array instrutores, filtrando o que será retornado
        return instrutor.id !== Number(id)  // retornando apenas os recursos que não possuem esse id
    })

    return res.status(204).send()

}


module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    alterarInstrutor,
    alterarParteInstrutor,
    excluirInstrutor

}