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


module.exports = router