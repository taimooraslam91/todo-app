import sequelize from '../config/db.js';

export async function createTables() {
  await sequelize.sync({ alter: true });
  console.log('All models were synchronized successfully.');
}

export async function dropTables() {
  await sequelize.drop();
  console.log('All tables dropped!');
}
