require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
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

