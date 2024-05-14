const express = require('express');

const router = express.Router();


router.get('/add/:x/:y', (req, res) => {

    const { x, y } = req.params

    let results = parseInt(x) + parseInt(y)
    res.send(`results: ${results}`)
});

router.get('/user/:username/photo', (req, res) => {
    if (req.params.username === "mario") {
        return res.sendFile('./th.jpg', {
            root: __dirname
        })
    }

    res.send('usuario no se encuentra')
})


router.get('/about', (req, res) => {

    const title = 'hola mi primera pagina con express me llamo mario'
    res.render('index', { title: title })

})


router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router