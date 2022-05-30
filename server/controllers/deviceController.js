const uuid = require('uuid');
const path = require('path');

const {Device} = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      const {name, price, typeId, brandId, info} = req.body;
      const {img} = req.files; //Получаем изображение
      let filename = uuid.v4() + '.jpg'; //Задаем ему название
      img.mv(path.resolve(__dirname, '..', 'static', filename)) //Перемещаем файл в папку static

      const device = await Device.create({name, price, typeId, brandId, img: filename});
      res.json(device);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getAll(req, res) {
    
  }

  async getOne(req, res) {
    
  }
}

module.exports = new DeviceController();