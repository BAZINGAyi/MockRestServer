module.exports = (sequelize, DataTypes) => {
    const Api = sequelize.define(
        'api',
         {
            // 定义字段
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            method: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            // 其他字段...
        },
        {tableName: 'apis', timestamps: false}

    );

    return Api; // 返回模型
};
