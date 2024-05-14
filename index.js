const express = require('express');
const config = require('./config');
const app = express();
const server = require('http').Server(app);
const morgan = require('morgan')
const path = require('path');
const routeCliente = require('./src/routes/cliente');
const routerUser = require('./src/routes/user');
require('ejs');
const viewPath = path.join(__dirname, './src/views')



//settings
app.set('case sensitive routing', true) // sensibilidad en el ending point con respecto a mayusculas y minusculas
app.set('views', viewPath)
app.set('view engine', 'ejs')


//middlewares
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
routeCliente(app)
app.use(routerUser);





app.use((req, res, next) => {
    console.log(`route: ${req.url} , method: ${req.method}`)

    next()
});

/* app.use((req, res, next) => {
    console.log(req.query.login)
    if (req.query.login === 'mario') {
        return next()
    } else {
        res.send('no autorizado')
    }
}); */

console.log('hola mundo');

app.get('/', (req, res) => {
    res.send('hola mundo')
});


app.get('/imagen', (req, res) => {
    res.sendFile('./th.jpg', {
        root: __dirname
    })
});





app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


server.listen(config.port, () => {
    console.log(`server working on ${config.messageServer}${config.port}`)
})