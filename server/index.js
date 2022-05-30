require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(fileUpload({}));
app.use(errorHandler); //Обработка ошибок идет в конце

const start = async () => {
  try {
    await sequelize.authenticate(); //Подключение к БД
    await sequelize.sync(); //Сверяет состояние БД с нашей схемой данных

    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  } catch(err) {
    throw new Error(err.message);
  }
};

start();

