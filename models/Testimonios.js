import Sequelice from "sequelize";
import db from "../config/db.js";

export const Testimonio = db.define('testimonios', {
    // Columnas o propiedas en la tabla 
    nombre: {
        type: Sequelice.STRING
    },
    correo: {
        type: Sequelice.STRING
    },
    mensaje: {
        type: Sequelice.STRING
    }
});