module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define('proveedor', {
        id_proveedor:{
            autoIncrement: true,
            type: Sequelize.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        empresa:{
            type: Sequelize.STRING,
        },
        direccion:{
            type: Sequelize.STRING,
        },
        telefono:{
            type: Sequelize.INTEGER,
        },
        nit:{
            type: Sequelize.STRING(30),
        },
        ciudad:{ 
            type: Sequelize.STRING,
        },
        pais:{
            type: Sequelize.STRING,
        },
        contacto:{
            type: Sequelize.STRING,
        },
        email:{
            type: Sequelize.STRING,
        },
        telefono_contacto: {
            type: Sequelize.INTEGER,
        },
        estatus: {
            type: Sequelize.INTEGER,
        }
    });

    return Proveedor;
}


