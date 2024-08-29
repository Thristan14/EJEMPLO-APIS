module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define('empleado', {
      idEmpleado: {
        type: Sequelize.NUMERIC, // Puedes usar Sequelize.INTEGER si prefieres enteros
        autoIncrement: false, // No se usa autoIncrement ya que el campo no es auto incrementable
        primaryKey: true
      },
      primerNombre: {
        type: Sequelize.STRING(100) // Limitar a 100 caracteres
      },
      segundoNombre: {
        type: Sequelize.STRING(100) // Limitar a 100 caracteres
      },
      primerApellido: {
        type: Sequelize.STRING(100) // Limitar a 100 caracteres
      },
      segundoApellido: {
        type: Sequelize.STRING(100) // Limitar a 100 caracteres
      },
      nit: {
        type: Sequelize.STRING(10) // Limitar a 10 caracteres
      },
      salario: {
        type: Sequelize.NUMERIC // Puedes usar Sequelize.DECIMAL si prefieres especificar precisión y escala
      },
      estatus: {
        type: Sequelize.NUMERIC // O Sequelize.INTEGER si prefieres enteros
      },
      idDepartamento: {
        type: Sequelize.NUMERIC, // O Sequelize.INTEGER si prefieres enteros
        references: {
          model: 'departamento', // Nombre de la tabla referenciada
          key: 'idDepartamento' // Columna de la tabla referenciada
        }
      }
    }, {
      tableName: 'empleado', // Nombre de la tabla en la base de datos
      timestamps: false // Si no necesitas las columnas de marca de tiempo (createdAt, updatedAt)
    });
  
    return Empleado;
  };
  