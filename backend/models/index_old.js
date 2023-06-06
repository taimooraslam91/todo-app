const sequelize = require('./index.js');

async function createTables() {
  await sequelize.sync({ alter: true });
  console.log('All models were synchronized successfully.');
}

async function dropTables() {
  await sequelize.drop();
  console.log('All tables dropped!');
}

module.exports = {
  createTables,
  dropTables,
};
