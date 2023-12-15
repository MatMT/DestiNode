import { Viaje } from "../models/Viaje.js"
import { Testimonio } from "../models/Testimonios.js";

// req - lo que enviamos : res - respuesta de express
const pageInicio = async (req, res) => {

    // Consultar 3 viajes
    try {
        const testimonios = await Testimonio.findAll({ limit: 3 });
        const viajes = await Viaje.findAll({ limit: 3 });

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimonios
        });
    } catch (error) {
        console.log(error);
    }

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

const pageTestimonios = async (req, res) => {

    try {
        const testimonios = await Testimonio.findAll();

        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonios
        });

    } catch (error) {
        console.log(error);
    }


}

// Exportando los parametros de las paginas
export {
    pageInicio,
    pageNosotros,
    pageTestimonios,
    pageViajes,
    pageDetailsViaje
}