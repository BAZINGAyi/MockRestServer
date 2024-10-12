const {Api, ApiToProperty, ApiProperty} = require('../models/index');

// Create API Property
exports.createApiProperty = async (req, res) => {
    try {
        const {responseStatusCode, responseContent, propertyName } = req.body;
        const apiProperty = await ApiProperty.create({
            responseStatusCode,
            responseContent,
            propertyName
        });
        res.status(201).json(apiProperty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all API Properties
exports.getAllApiProperties = async (req, res) => {
    try {
        const apiProperties = await ApiProperty.findAll();
        res.status(200).json(apiProperties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update API Property
exports.updateApiProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const {responseStatusCode, responseContent, propertyName } = req.body;

        const [updated] = await ApiProperty.update(
            { responseStatusCode, responseContent, propertyName },
            { where: { id } }
        );

        if (updated) {
            const updatedApiProperty = await ApiProperty.findByPk(id);
            return res.status(200).json(updatedApiProperty);
        }

        res.status(404).json({ message: 'API Property not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete API Property
exports.deleteApiProperty = async (req, res) => {
    try {
        const { id } = req.params;
        // 如果 id 没有在 api_to_properties 表中，才能删除
        const apiToProperty = await ApiToProperty.findOne({
            where: { apiPropertyId: id }
        });
        if (apiToProperty) {
            return res.status(400).json({ message: 'API Property is bound to API' });
        }

        const deleted = await ApiProperty.destroy({
            where: { id },
        });

        if (deleted) {
            return res.status(204).send(); 
        }

        res.status(404).json({ message: 'API Property not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
