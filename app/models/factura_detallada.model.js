module.exports = (sequelize, Sequelize) => {
    const FacturaDetalle = sequelize.define('factura_detalles', {
      id_factura: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
      },
      id_linea: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
      },
      id_producto: {
        type: Sequelize.NUMERIC
      },
      cantidad: {
        type: Sequelize.NUMERIC
      }
    }, {
      tableName: 'FACTURA_DETALLE',
      timestamps: false
    });
  
    // Definimos las relaciones de clave foránea
    FacturaDetalle.associate = function(models) {
      FacturaDetalle.belongsTo(models.Factura, {
        foreignKey: 'id_factura',
        as: 'factura'
      });
      FacturaDetalle.belongsTo(models.Producto, {
        foreignKey: 'id_producto',
        as: 'producto'
      });
    };
  
    return FacturaDetalle;
  };
  