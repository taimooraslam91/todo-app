const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  logging: function (...msg) {
    console.log(msg);
  }, // Displays all log function call parameters
});

function testConnection() {
  sequelize
    .authenticate()
    .then(function () {
      console.log('Connection has been established successfully.');
    })
    .catch(function (error) {
      console.error('Unable to connect to the database:', error);
    });
}

module.exports = sequelize;
module.exports.testConnection = testConnection;
