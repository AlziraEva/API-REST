let { instrutores, identificadorAulas, aulas } = require('../bancodedados')
const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params
    const { titulo, descricao } = req.body
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor)
    })
    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado' }) //servidor não pode encontrar o recurso
    }

    if (!titulo) {
        return res.status(400).json({ mensagem: 'o titulo é obrigatório.' })
    }
    if (!descricao) {
        return res.status(400).json({ mensagem: 'a descrição é obrigatória.' })
    }

    const aula = {
        id: identificadorAulas++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }
    aulas.push(aula)
    res.status(201).json(aula)
}

const listarAulas = (req, res) => {

    return res.status(200).json(aulas)
}

const acessarAula = (req, res) => {
    const { id } = req.params
    const aula = aulas.find((aula) => {
        return aula.id === Number(id)
    })
    if (!aula) {
        return res.status(404).json({ mensagem: 'aula não encontrada' })
    }

    return res.status(200).json(aula)
}

const listarAulasInstrutor = (req, res) => {
    const { idInstrutor } = req.params
    const Instrutor = aulas.find((instrutor) => {
        return instrutor.id === Number(idInstrutor)
    })
    if (!Instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado' })
    }

    const aulasInstrutor = aulas.filter((instrutor) => {
        return instrutor.instrutor_id === Number(idInstrutor)
    })

    return res.status(200).json(aulasInstrutor)

}

module.exports = {
    cadastrarAula,
    listarAulas,
    acessarAula,
    listarAulasInstrutor
}