const { Sequelize } = require('sequelize');

// Change these values according to your database configuration
const sequelize = new Sequelize('api_mock_tool', 'root', 'xxx', {
    host: 'xxx',
    dialect: 'mysql',
});

module.exports = sequelize;
