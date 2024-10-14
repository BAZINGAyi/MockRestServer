const {Api, ApiToProperty} = require('../models/index');
const { Op } = require("sequelize");

// Create API
exports.createApi = async (req, res) => {
    try {
        const { name, description, url, method } = req.body;
        // if url and method already exist, return 400
        const existingApi = await Api.findOne({
            where: {
                [Op.and]: [
                    { url: url },
                    { method: method }
                ]
            }});

        if (existingApi) {
            return res.status(400).json({"message": "API Url and method already exists"});
        }

        const api = await Api.create({ name, url, method, description });
        res.status(201).json(api);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all APIs
exports.getAllApis = async (req, res) => {
    try {
        // const apis = await Api.findAll();
        // 使用 join api_to_properties 表，获取绑定的属性
        const api_query_sql = `SELECT a.*, atp.apiPropertyId FROM apis a LEFT JOIN api_to_properties atp ON a.id = atp.apiId`;
        const apis = await Api.sequelize.query(api_query_sql, { type: Api.sequelize.QueryTypes.SELECT });
        res.status(200).json(apis);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update API
exports.updateApi = async (req, res) => {
    try {
        const { id } = req.params; 
        const { name, url, method, description } = req.body; 

        // if url and method already exist, return 400
        const existingApi = await Api.findOne({
            where: {
                [Op.and]: [
                    { url: url },
                    { method: method }
                ]
            }});

        if (existingApi && existingApi.id != id) {
            return res.status(400).json({"message": "API Url and method already exists"});
        }

        const [updated] = await Api.update(
            { name, url, method, description },
            { where: { id } }
        );

        if (updated) {
            const updatedApi = await Api.findByPk(id);
            return res.status(200).json(updatedApi);
        }

        res.status(404).json({ message: 'API update failed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete API
exports.deleteApi = async (req, res) => {
    try {
        const { id } = req.params; 

        // check if api is bound to a property
        const apiToProperty = await ApiToProperty.findOne({
            where: { apiId: id }
        });
        if (apiToProperty) {
            return res.status(400).json({ message: 'API is bound to a property, unbind first' });
        }

        const deleted = await Api.destroy({
            where: { id },
        });

        if (deleted) {
            return res.status(204).send(); 
        }

        res.status(404).json({ message: 'API not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Bind API to Property
exports.bindApiToProperty = async (req, res) => {
    try {
        console.log(req.body);
        const { apiId, apiPropertyId } = req.body; 
        
        // 如果已经绑定了，就不再绑定
        const existingBinding = await ApiToProperty.findOne({
            where: { apiId: apiId },
        });

        if (existingBinding) {
            return res.status(500).json({"message": "API already bound to a property"});
        }
        console.log({ apiId: apiId, apiPropertyId: apiPropertyId });
        const binding = await ApiToProperty.create({ apiId: apiId, apiPropertyId: apiPropertyId });

        res.status(201).json(binding); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Unbind API from Property
exports.unbindApiToProperty = async (req, res) => {
    try {
        console.log(req.body);
        const { apiId } = req.body; 
        console.log(apiId);

        const deleted = await ApiToProperty.destroy({
            where: { apiId: apiId },
        });

        if (deleted) {
            return res.status(204).send(); 
        }

        res.status(404).json({ message: 'API not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};