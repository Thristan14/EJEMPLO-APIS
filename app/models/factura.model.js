module.exports = (sequelize, Sequelize) => {
    const Factura = sequelize.define('facturas', {
      id_factura: {
        type: Sequelize.NUMERIC, 
        autoIncrement: false, 
        primaryKey: true
      },
      no_fact: {
        type: Sequelize.NUMERIC 
      },
      serie: {
        type: Sequelize.STRING(20) 
      },
      id_cliente: {
        type: Sequelize.NUMERIC
      },
      id_empleado: {
        type: Sequelize.NUMERIC 
      },
      fecha_fac: {
        type: Sequelize.DATE 
      }
    }, {
      tableName: 'FACTURA', 
      timestamps: false 
    });
  
    // Definimos las relaciones de clave foránea
    Factura.associate = function(models) {
      Factura.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente',
        as: 'cliente'
      });
      Factura.belongsTo(models.Empleado, {
        foreignKey: 'id_empleado',
        as: 'empleado'
      });
    };
  
    return Factura;
  };
  