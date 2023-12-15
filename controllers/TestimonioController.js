import { Testimonio } from "../models/Testimonios.js";

const storeTestimonio = async (req, res) => {
    // Validación
    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    if (nombre.trim() === '') {
        errores.push('El nombre esta vació');
    }
    if (correo.trim() === '') {
        errores.push('El correo esta vació');
    }
    if (mensaje.trim() === '') {
        errores.push('El mensaje esta vació');
    }

    // Al menos hay un error
    if (errores.length > 0) {

        // Consultar testimonios existentes
        const testimonios = await Testimonio.findAll({ limit: 3 });

        // Mostrar vista con errores
        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje,
            testimonios
        })
    }
    else {

        // Creación en la base de datos
        try {
            await Testimonio.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/testimonios');

        } catch (error) {
            console.log(error);
        }
    }
}

export {
    storeTestimonio
}