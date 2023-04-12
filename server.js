require('dotenv').config();

const express = require('express');
const db = require('./config/connection');
const SSM = require('./models/SSM');
const PORT = process.env.PORT || 3000;

const app = express();

db.sync({ force: false }).then(() => {
  SSM.findOne({
    where: {
      id: 1
    }
  }).then(ssm => {
    console.log(ssm);
  })
  SSM.update({
    email: 'enrique2@class.com',
  }, {
    where: {
      id: 1
    }
  }).then(newObj => {
    console.log(newObj);
  });

  // SSM.bulkCreate([
  //   {
  //     name: 'Enrique',
  //     age: 39,
  //     email: 'enrique@class.com'
  //   },
  //   {
  //     name: 'Jeanna',
  //     age: 35,
  //     email: 'jeanna@class.com'
  //   }
  // ]).then(newSSMs => {
  //   console.log(newSSMs);
  // })
  // SSM.create({
  //   name: 'Enrique',
  //   age: 39,
  //   email: 'enrique@class.com'
  // }).then((newSSM) => {
  //   console.log(newSSM);
  // });

  // SSM.findAll({
  //   where: {
  //     id: 3
  //   }
  // }).then((ssms) => {
  //   console.log(ssms);
  // });


  app.listen(PORT, () => console.log('Server listening on port %s', PORT));
});