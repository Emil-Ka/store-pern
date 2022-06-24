const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken');

module.exports = function(role) {
  return function(req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }
  
    try {
      const token = req.headers.authorization.split(' ')[1]; //Bearer dvfbfgbhnttrgtv
  
      if (!token) {
        return next(ApiError.unauthorized('Не авторизован'));
      }
  
      const decoded = jwt.verify(token, process.env.SECRET_KEY); //Декодирует токен по ключу

      if (decoded.role !== role) {
        return next(ApiError.forbidden('Нет доступа')); 
      }

      req.user = decoded; //Кладем в req данные о пользователе и идем дальше
      next();
    } catch(err) {
      return next(ApiError.unauthorized('Не авторизован'));
    }
  }
}