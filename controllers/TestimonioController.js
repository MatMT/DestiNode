const storeTestimonio = (req, res) => {
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
        // Mostrar vista con errores
        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {

    }
}

export {
    storeTestimonio
}