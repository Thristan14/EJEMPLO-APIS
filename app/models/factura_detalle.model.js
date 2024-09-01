module.exports = (sequelize, Sequelize) => {
  const Factura_detalle = sequelize.define('factura_detalle', {
    id_factura: {
      type: Sequelize.INTEGER, // Tipo de dato para el identificador
      primaryKey: true,
      allowNull: false
    },
      id_linea: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    id_producto: {
      type: Sequelize.INTEGER
    },
    cantidad: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  return Factura_detalle;
};