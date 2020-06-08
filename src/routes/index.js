const express = require ('express')
const router = express.Router()

const home = require('../controllers/home')

const listaController = require('../controllers/lista')

const produtoController = require('../controllers/produto')

router.get('/', home.home)

router.post('/lista', listaController.lista)

router.get('/produto', produtoController.novo)

router.post('/produto', produtoController.incluir)

router.post('/produto/produto', produtoController.alterar)

router.post('/produto/update', produtoController.update)

module.exports = router;