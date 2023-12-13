import express from 'express';
import { pageInicio, pageNosotros, pageViajes, pageTestimonios, pageDetailsViaje } from '../controllers/PaginasController.js';
import { storeTestimonio } from '../controllers/TestimonioController.js';

const router = express.Router();

router.get('/', pageInicio);

router.get('/nosotros', pageNosotros)

router.get('/viajes', pageViajes)

router.get('/viajes/:slug', pageDetailsViaje)

router.get('/testimonios', pageTestimonios)
router.post('/testimonios', storeTestimonio)

export default router;