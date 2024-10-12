const express = require('express');
const router = express.Router();
const { Api, ApiProperty, ApiToProperty } = require('../models');

router.all('*', async (req, res) => {
    try {
        const { method, originalUrl } = req;
        console.log('method', method);
        console.log('originalUrl', originalUrl);
        const api = await Api.findOne({ where: { url: originalUrl, method } });

        if (!api) {
            return res.status(555).json({ message: 'Mock API not found' });
        }

        const apiToProperty = await ApiToProperty.findOne({ where: { apiId: api.id } });

        if (!apiToProperty) {
            return res.status(555).json({ message: 'Mock API Property not found' });
        }

        const apiProperty = await ApiProperty.findByPk(apiToProperty.apiPropertyId);
        if (!apiProperty) {
            return res.status(555).json({ message: 'Mock API Property not found' });
        }

        const responseContent = JSON.parse(apiProperty.responseContent);
        res.status(apiProperty.responseStatusCode).json(responseContent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;