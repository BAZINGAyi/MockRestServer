const { response } = require("express");

module.exports = (sequelize, DataTypes) => {
    const ApiProperty = sequelize.define(
        'api_property',
         {
            propertyName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            responseStatusCode: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            responseContent: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {tableName: 'api_properties', timestamps: true}
    );

    return ApiProperty; // 返回模型
};
