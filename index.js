const express = require('express');
const config = require('./config');
const app = express();
const server = require('http').Server(app);



app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`route: ${req.url} , method: ${req.method}`)

    next()
});

console.log('hola mundo');

app.get('/', (req, res) => {
    res.send('hola mundo')
});


app.get('/imagen', (req, res) => {
    res.sendFile('./th.jpg', {
        root: __dirname
    })
});

app.get('/cliente/:user', (req, res) => {
    //console.log(req.params)
    let user = req.params.user
    res.send(`cliente nuevo ${user}`)
});

app.post('/cliente', (req, res) => {
    console.log(req.body)
    res.send('cliente nuevo')
});

app.get('/add/:x/:y', (req, res) => {

    const { x, y } = req.params

    let results = parseInt(x) + parseInt(y)
    res.send(`results: ${results}`)
});

app.get('/user/:username/photo', (req, res) => {
    if (req.params.username === "mario") {
        return res.sendFile('./th.jpg', {
            root: __dirname
        })
    }

    res.send('usuario no se encuentra')
})


server.listen(config.port, () => {
    console.log(`server working on ${config.messageServer}${config.port}`)
})