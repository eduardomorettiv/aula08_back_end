const express = require("express")
const router = express.Router()
const produtos = require("../dados/itens.json")

const rotaInicial = (req, res) => {
    res.json(produtos)
}

const alterar = ((req, res) => {
    //pegar id http://localhost:3000/produtos/id
    const id = req.params.id
    const novosdados = req.body

    //pegar as chaves do produtos
    const chaves = Object.keys(produtos)

    //procurar id
    const produtoprocurado = produtos.find((C) => C.id==id)

    //alterar dados do id procurado usando a "chaves"
    chaves.forEach((chave)=>{
        produtoprocurado[chave]=novosdados[chave]
    })

    res.status(201).json("Alterado com sucesso")
})

const excluir = ((req, res)=>{
    //pegar o id no query
    const idprocurar=req.query.id

    //procurar esse id nos produtos
    produtos.forEach((indice)=>{
        if(idprocurar==produtos.id){
            //excluir o id procurado
            idprocurar.splice(indice, 1)
        }
    })
})

router.get('/produtos',rotaInicial)
router.put('/produtos/:id', alterar)
router.delete('/produtos', excluir)

module.exports = router