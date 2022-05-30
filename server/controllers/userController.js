const ApiError = require('../error/ApiError');

class UserController {
  async registration(req, res) {

  }

  async login(req, res) {
    
  }

  async check(req, res, next) { //Проверяет: авторизован или нет
    const {id} = req.query;

    if (!id) {
      return next(ApiError.badRequest('ID не задан'));
    }

    res.json({id: id});
  }
}

module.exports = new UserController();