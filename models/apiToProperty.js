const DataTypes = require('sequelize');
const sequelize = require('../config/database');
const Api = require('./api')(sequelize, DataTypes);
const ApiProperty = require('./apiProperty')(sequelize, DataTypes);

module.exports = (sequelize, DataTypes) => {
    const ApiToProperty = sequelize.define(
        'api_to_property',
        {
            apiId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Api,
                    key: 'id'
                }
            },
            apiPropertyId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: ApiProperty,
                    key: 'id'
                }
            }
        },
        {tableName: 'api_to_properties', timestamps: true}
    );

    return ApiToProperty; // 返回模型
};
