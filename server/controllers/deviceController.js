const uuid = require('uuid');
const path = require('path');

const {Device, DeviceInfo} = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      let {name, price, typeId, brandId, info} = req.body;
      const {img} = req.files; //Получаем изображение
      let filename = uuid.v4() + '.jpg'; //Задаем ему название
      img.mv(path.resolve(__dirname, '..', 'static', filename)) //Перемещаем файл в папку static

      const device = await Device.create({name, price, typeId, brandId, img: filename});
      res.json(device);

      if (info) {
        info = JSON.parse(info);
        info.forEach(item => {
          DeviceInfo.create({
            deviceId: device.id,
            title: item.title,
            description: item.description
          })
        })
      }

    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getAll(req, res) {
    let {typeId, brandId, limit, page} = req.query;
    page = page || 1;
    limit = limit || 10;
    const offset = page * limit - limit;

    let devices;

    if (!typeId && !brandId) {
      devices = await Device.findAndCountAll({limit, offset});
    }
    if (typeId && !brandId) {
      devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
    }
    if (!typeId && brandId) {
      devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
    }
    if (typeId && brandId) {
      devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset});
    }

    return res.json(devices);
  }

  async getOne(req, res) {
    const {id} = req.params;
    const device = await Device.findOne({
      where: {id},
      include: [{model: DeviceInfo, as: 'info'}]
    });

    return res.json(device);
  }
}

module.exports = new DeviceController();