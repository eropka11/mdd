import express from 'express';
import envConfig from 'dotenv';
import sequelize from './db.js';

envConfig.config();

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Started on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
