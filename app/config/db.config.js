const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  operatorsAliases: false,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

// Importar modelos
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Book = require('../models/books.model.js')(sequelize, Sequelize);
db.Prestamo = require('../models/prestamo.model.js')(sequelize, Sequelize);
db.Departamento = require('../models/departamento.model.js')(sequelize, Sequelize);
db.Empleado = require('../models/empleado.model.js')(sequelize, Sequelize);
db.Cliente = require('../models/cliente.model.js')(sequelize, Sequelize);
db.Proveedor = require('../models/proveedor.model.js')(sequelize, Sequelize);
db.Producto = require('../models/producto.model.js')(sequelize, Sequelize);
db.Factura = require('../models/factura.model.js')(sequelize, Sequelize);
db.Factura_Detallada = require('../models/factura_detallada.model.js')(sequelize, Sequelize);

module.exports = db;
