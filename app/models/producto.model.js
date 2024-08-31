module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define('productos', {
      id_producto: {
        type: Sequelize.NUMERIC, // Utilizamos NUMERIC en lugar de INTEGER para coincidir con el tipo NUMERIC en SQL
        autoIncrement: false, // Asumimos que no es autoincremental según la definición SQL proporcionada
        primaryKey: true
      },
      descripcion: {
        type: Sequelize.STRING(100) // VARCHAR(100) en SQL corresponde a STRING(100) en Sequelize
      },
      stock: {
        type: Sequelize.NUMERIC // NUMERIC en lugar de FLOAT para representar STOCK
      },
      stock_minimo: {
        type: Sequelize.NUMERIC // NUMERIC en lugar de FLOAT para STOCK_MINIMO
      },
      precio_unitario: {
        type: Sequelize.FLOAT // FLOAT en Sequelize es equivalente a FLOAT en SQL
      },
      id_proveedor: {
        type: Sequelize.NUMERIC // NUMERIC para ID_PROVEEDOR
      }
    }, {
      tableName: 'PRODUCTO', // Especificamos el nombre de la tabla en la base de datos
      timestamps: false // Desactiva las marcas de tiempo automáticamente agregadas por Sequelize
    });
  
    // Definimos la relación de clave foránea
    Producto.associate = function(models) {
      Producto.belongsTo(models.Proveedor, {
        foreignKey: 'id_proveedor',
        as: 'proveedor'
      });
    };
  
    return Producto;
  };
  