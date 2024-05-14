function routesCliente(app) {

    app.get('/cliente/:user', (req, res) => {
        //console.log(req.params)
        let user = req.params.user
        res.send(`cliente nuevo ${user}`)
    });

    app.post('/cliente', (req, res) => {
        console.log(req.body)
        res.send('cliente nuevo')

    });


};

module.exports = routesCliente;