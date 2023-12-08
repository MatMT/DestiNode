import Sequelize from "sequelize";
import db from "../config/db";

export const Viaje = db.define('viajes', {
    // Columnas o propiedas en la tabla 
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_go: {
        type: Sequelize.DATE
    },
    fecha_return: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    desc: {
        type: Sequelize.STRING
    },
    disp: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});