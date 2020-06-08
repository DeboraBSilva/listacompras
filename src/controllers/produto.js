const config = require('../config/db')
const db = require('knex')(config)

exports.novo = (req, res) => {
    res.render('produtoNovo')
}

exports.incluir = async (req, res) => {
    let preco = parseFloat(req.body.preco)
    if(isNaN(preco)){
        preco = 0.0
    }
    const id = await db('produtos')
        .insert({
            resumo: (req.body.resumo).toUpperCase(),
            descricao: (req.body.produto).toUpperCase(),
            preco
        })
    if (id > 0) {
        res.render('produtoNovo')
    } else {
        res.send('Problemas na inclusão')
    }
}

exports.alterar = async (req, res) => {
    const produto = JSON.parse(req.body.produtoAlterar)
    res.render('produtoAlterar', {
        id: produto.id,
        resumo: (produto.resumo).toUpperCase(),
        descricao: (produto.produto).toUpperCase(),
        preco: produto.preco
    })
}

exports.update = async (req, res) => {
    const id = await db('produtos')
        .where('id', '=', req.body.id)
        .update({
            resumo: (req.body.resumo).toUpperCase(),
            descricao: (req.body.produto).toUpperCase(),
            preco: req.body.preco
        })
        res.redirect('/')
}
