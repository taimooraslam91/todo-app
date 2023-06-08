'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [
      {
        id: uuidv4(),
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        isVerify: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'janesmith@example.com',
        password: 'abc123',
        isVerify: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michaeljohnson@example.com',
        password: 'passw0rd',
        isVerify: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        firstName: 'Emily',
        lastName: 'Brown',
        email: 'emilybrown@example.com',
        password: 'qwerty',
        isVerify: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        firstName: 'David',
        lastName: 'Wilson',
        email: 'davidwilson@example.com',
        password: 'test123',
        isVerify: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  },
};
