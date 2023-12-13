import { Viaje } from "../models/Viaje.js"

// req - lo que enviamos : res - respuesta de express
const pageInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const pageNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nostros'
    });
};

const pageViajes = async (req, res) => {
    // Consultar asíncronamente la DB
    let viajes = await Viaje.findAll();
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
};

// Muestra un viaje por su slug
const pageDetailsViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })

    } catch (error) {
        console.log(error);
    }
};

const pageTestimonios = (req, res) => {
    res.render('testimonios', {
        pagina: 'Testimonios'
    });
}

// Exportando los parametros de las paginas
export {
    pageInicio,
    pageNosotros,
    pageTestimonios,
    pageViajes,
    pageDetailsViaje
}