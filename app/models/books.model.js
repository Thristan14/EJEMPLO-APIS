 module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('books', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bookcode: {
      type: Sequelize.INTEGER
    },
    namebook: {
      type: Sequelize.STRING
    },
    editorial: {
      type: Sequelize.STRING
    },
    autor: {
      type: Sequelize.STRING
    },
    genero: {
      type: Sequelize.STRING
    },
    paisautor: {
      type: Sequelize.STRING
    },
    numeropaginas: {
      type: Sequelize.INTEGER
    },
    ano: {
      type: Sequelize.DATE
    },
    preciolibro: {
      type: Sequelize.DECIMAL(10, 2)
    }
  });

  return Book;
};
  