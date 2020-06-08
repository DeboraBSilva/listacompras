const config = require('../config/db')
const db = require('knex')(config)

exports.home = async (req, res) => {
    const produtos = await db('produtos').select('*').orderBy('resumo')
    let indice = 1;
    const lista = produtos.map(produto => {
        return {
            indice: indice++,
            id: produto.id,
            resumo: produto.resumo,
            descricao: produto.descricao,
            preco: produto.preco,
            quantidade: 0
        }
    })
    res.render('home', {
        lista
    })
}
