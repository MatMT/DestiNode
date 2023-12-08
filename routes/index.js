import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    // req - lo que enviamos : res - respuesta de express
    res.render('inicio', {
        pagina: 'Inicio'
    });
})

router.get('/nosotros', (req, res) => {
    // req - lo que enviamos : res - respuesta de express
    res.render('nosotros', {
        pagina: 'Nostros'
    });
})

router.get('/viajes', (req, res) => {
    // req - lo que enviamos : res - respuesta de express
    res.render('viajes', {
        pagina: 'Viajes'
    });
})

router.get('/testimonios', (req, res) => {
    // req - lo que enviamos : res - respuesta de express
    res.render('testimonios', {
        pagina: 'Testimonios'
    });
})


export default router;