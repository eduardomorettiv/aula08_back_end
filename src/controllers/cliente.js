const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1
    clientes.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(clientes)
}

const alterar = (req, res) => {
    const { id } = req.body
    const index = clientes.findIndex(c => c.id == id)
    if (index !== -1) {
        clientes[index] = { ...clientes[index], ...req.body }
        return res.status(200).json(clientes[index])
    }
    res.status(404).json({ mensagem: "Cliente não encontrado" })
}

const excluir = (req, res) => {
    const { id } = req.body
    const index = clientes.findIndex(c => c.id == id)
    if (index !== -1) {
        clientes.splice(index, 1)
        return res.status(204).send()
    }
    res.status(404).json({ mensagem: "Cliente não encontrado" })
}

module.exports = {
    criar, listar, alterar, excluir
}