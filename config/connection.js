const { Sequelize } = require('sequelize');

// const cloudDBURL = 'mysql://r5l8gr7tcuttgpm4:jtqm62baplfidd7l@l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/aj91s4swdmnfthol';

const connection = new Sequelize(
  'example_db', // DB
  'root', // Username
  '', { // Password
  host: 'localhost',
  dialect: 'mysql'
}
);

module.exports = connection;