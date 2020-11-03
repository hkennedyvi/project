require('dotenv').config();

const mongoose = require('mongoose');
const DB = require('../models');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const projectSeed = [
    {
        title: 'Good Restaurant',
        author: 'Howard Kennedy',
        date: new Date(Date.now())
    }
];

DB.Project
  .remove({})
  .then(() => DB.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });