const express = require('express')
const { listarInstrutores, obterInstrutor, cadastrarInstrutor, alterarInstrutor, alterarParteInstrutor, excluirInstrutor } = require('./controladores/instrutores')
const { cadastrarAula, listarAulas, acessarAula, listarAulasInstrutor } = require('./controladores/aulas')
const rotas = express()

rotas.get('/instrutores', listarInstrutores) // listar a coleção
rotas.get('/instrutores/:id', obterInstrutor) // acessar um recurso da coleção
rotas.post('/instrutores', cadastrarInstrutor) // cadastrar um novo recurso da coleção
rotas.put('/instrutores/:id', alterarInstrutor) // alterar por completo o recurso da coleção
rotas.patch('/instrutores/:id', alterarParteInstrutor) // alterar uma parte do recurso da coleção
rotas.delete('/instrutores/:id', excluirInstrutor) // excluir recurso de uma coleção

rotas.post('/instrutores/:idInstrutor/aulas', cadastrarAula) // cadastrar o recurso aulas para cada instrutor
rotas.get('/aulas', listarAulas) //listar a coleção de aulas
rotas.get('/aulas/:id', acessarAula) // acessar uma aula
rotas.get('/instrutores/:idInstrutor/aulas', listarAulasInstrutor) // listar todas as aulas de um instrutor

module.exports = rotas