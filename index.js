import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar a DB
db.authenticate()
    .then(() => console.log('DB 200'))
    .catch(error => console.error(error));

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Creando un middleware propio
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nameSite = "DestiNode";

    next();
})

// Definir la carpeta public
app.use(express.static('public'));

// Agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})