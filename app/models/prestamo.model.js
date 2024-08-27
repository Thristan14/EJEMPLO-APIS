module.exports = (sequelize, Sequelize) => {
    const Prestamo = sequelize.define('prestamos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      codlibro: {
        type: Sequelize.INTEGER
      },
      codusuario: {
        type: Sequelize.STRING
      },
      fechasalida: {
        type: Sequelize.DATE
      },
      fechamaxima: {
        type: Sequelize.DATE
      },
      fechadevolucion: {
        type: Sequelize.DATE
      }
    });
  
    return Prestamo;
  };