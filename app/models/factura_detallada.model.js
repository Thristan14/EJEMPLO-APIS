module.exports = (sequelize, Sequelize) => {
  const Factura_Detallada = sequelize.define('factura_detallas', {
    id_factura: {
      type: Sequelize.NUMERIC,
      primaryKey: true
    },
    id_linea: {
      type: Sequelize.NUMERIC,
      primaryKey: true
    },
    id_producto: {
      type: Sequelize.NUMERIC
    },
    cantidad: {
      type: Sequelize.NUMERIC
    }
  }, {
    tableName: 'FACTURA_DETALLADA',
    timestamps: false
  });

  return Factura_Detallada;
};