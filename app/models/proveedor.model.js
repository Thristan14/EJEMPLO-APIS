module.exports = (sequelize, Sequelize) => {
  const Proveedor = sequelize.define('proveedores', {
    id_proveedor: {
      type: Sequelize.NUMERIC,
      primaryKey: true
    },
    empresa: {
      type: Sequelize.STRING(100)
    },
    direccion: {
      type: Sequelize.STRING(100)
    },
    telefono: {
      type: Sequelize.NUMERIC
    },
    nit: {
      type: Sequelize.STRING(30)
    },
    ciudad: {
      type: Sequelize.STRING(100)
    },
    pais: {
      type: Sequelize.STRING(100)
    },
    contacto: {
      type: Sequelize.STRING(100)
    },
    email: {
      type: Sequelize.STRING(100)
    },
    telefono_contacto: {
      type: Sequelize.NUMERIC
    },
    estatus: {
      type: Sequelize.NUMERIC
    }
  }, {
    tableName: 'proveedores',  // Especifica el nombre de la tabla en la base de datos
    timestamps: false         // Desactiva las marcas de tiempo (createdAt, updatedAt)
  });

  return Proveedor;
};
