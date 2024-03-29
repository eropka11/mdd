import express from 'express';
import cors from 'cors';
import envConfig from 'dotenv';
import sequelize from './db.js';
import router from './routes/index.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';

envConfig.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

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
