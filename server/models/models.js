const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true}, //Каждый email должен быть уникальным
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'USER'} //Значение по умолчанию
});

const Cart = sequelize.define('cart', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const CartDevice = sequelize.define('cart_device', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Device = sequelize.define('device', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}, //Не можеть быть NULL
  price: {type: DataTypes.FLOAT, allowNull: false},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, allowNull: false}
});

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false}
});

const Brand = sequelize.define('brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false}
});

const Rating = sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: false}
});

const DeviceInfo = sequelize.define('device_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false}
});

const TypeBrand = sequelize.define('type_brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

User.hasOne(Cart); //ОДНОМУ пользователю может принадлежать 1 корзина
Cart.belongsTo(User); //1 корзина может принадлежать ОДНОМУ пользователю

User.hasMany(Rating); //ОДНОМУ пользователю может принадлежать МНОГО рейтингов товаров
Rating.belongsTo(User); //1 рейтинг может принадлежать ОДНОМУ пользователю

Cart.hasMany(CartDevice); //ОДНОЙ корзине может принадлежать МНОГО устройств
CartDevice.belongsTo(Cart); //1 устройство может принадлежать ОДНОЙ корзине

Type.hasMany(Device); //ОДНОМУ типу может принадлежать МНОГО устройств
Device.belongsTo(Type); //1 устройство может принадлежать ОДНОМУ типу

Type.belongsToMany(Brand, {through: TypeBrand}); //Связь много ко многим ОДНОМУ типу принадлежит МНОГО брендов
Brand.belongsToMany(Type, {through: TypeBrand}); //и наоборот, поэтому создаем доп. таблицу в trough

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(CartDevice);
CartDevice.belongsTo(Device);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);

module.exports = {
  User,
  Cart,
  CartDevice,
  Device,
  DeviceInfo,
  Rating,
  Brand,
  Type,
  TypeBrand
}