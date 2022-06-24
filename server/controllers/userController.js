const ApiError = require('../error/ApiError');
const {User, Cart} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role = 'USER') => {
  const token = jwt.sign(
    {id, email, role}, 
    process.env.SECRET_KEY, 
    {expiresIn: '24h'}
  );

  return token;
}

class UserController {
  async registration(req, res, next) {
    const {email, password, role} = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или пароль'));
    }

    const candidate = await User.findOne({where: {email}});
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({email, password: hashPassword, role});
    const cart = await Cart.create({userId: user.id});

    const token = generateJwt(user.id, email, role);

    res.json({token});
  }

  async login(req, res, next) {
    const {email, password} = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или пароль'));
    }

    const user = await User.findOne({where: {email}});

    if (!user) {
      return next(ApiError.internal('Пользователь с таким email не существует'));
    }

    const comparePass = bcrypt.compareSync(password, user.password); //Сравнивает пароли

    if (!comparePass) {
      return next(ApiError.internal('Неверный пароль'));
    }

    const token = generateJwt(user.id, user.email, user.role);

    res.json({token});
  }

  async check(req, res, next) { //Проверяет: авторизован или нет
    const token = generateJwt(req.user.id, req.user.email, req.user.role); 
    //Эти данные прихлдят из middleware
    res.json({token});
  }
}

module.exports = new UserController();