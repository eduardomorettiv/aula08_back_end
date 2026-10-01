const pedidos = require("../../dados/pedidos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1
    pedidos.push(dados)
    res.status(201).json(dados)
}

const calcTotais = (req, res) => {
    // 1. Guarda o resultado do reduce na variável 'total'
    const total = pedidos.reduce((acumulador, valorAtual) => acumulador + item.valor, 0);
    
    console.log(`Total: R$ ${total.toFixed(2)}`);

    // 2. Envia a resposta HTTP de volta ao cliente
    return res.json({ total: total.toFixed(2) });
}

const listar=(req, res)=>{
    res.send(pedidos)
}

const alterar = (req, res) => {
    const { id } = req.body
    const index = pedidos.findIndex(p => p.id == id)
    if (index !== -1) {
        pedidos[index] = { ...pedidos[index], ...req.body }
        return res.status(200).json(pedidos[index])
    }
    res.status(404).json({ mensagem: "Pedido não encontrado" })
}

const excluir = (req, res) => {
    const { id } = req.body
    const index = pedidos.findIndex(p => p.id == id)
    if (index !== -1) {
        pedidos.splice(index, 1)
        return res.status(204).send()
    }
    res.status(404).json({ mensagem: "Pedido não encontrado" })
}

module.exports = {
    criar, listar, alterar, excluir
}
