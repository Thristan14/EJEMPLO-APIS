module.exports = (sequelize, Sequelize) => {
    const Departamento = sequelize.define('departamento', {
      idDepartamento: {
        type: Sequelize.NUMERIC, // o Sequelize.INTEGER si prefieres usar enteros
        autoIncrement: false,
        primaryKey: true
      },
      descripcion: {
        type: Sequelize.STRING(80) // Limitar a 80 caracteres como en el VARCHAR(80)
      }
    }, {
      tableName: 'departamento', // Nombre de la tabla en la base de datos
      timestamps: false // Si no necesitas las columnas de marca de tiempo (createdAt, updatedAt)
    });
  
    return Departamento;
  };
  