const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Api = require('./api')(sequelize, DataTypes);
const ApiProperty = require('./apiProperty')(sequelize, DataTypes);
const ApiToProperty = require('./apiToProperty')(sequelize, DataTypes);

// 这里可以定义关联关系
// Api.hasMany(ApiProperty);
// ApiProperty.belongsTo(Api);

module.exports = {
    sequelize,
    Api,
    ApiProperty,
    ApiToProperty,
};
