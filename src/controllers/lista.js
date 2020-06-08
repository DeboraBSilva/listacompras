exports.lista = (req, res) => {
    res.render('lista', {
        lista: JSON.parse(req.body.lista)
    })
}
