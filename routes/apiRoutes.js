const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Create API
router.post('/api', apiController.createApi);

// Get all APIs
router.get('/api', apiController.getAllApis);

// Update API
router.put('/api/:id', apiController.updateApi);

// Delete API
router.delete('/api/:id', apiController.deleteApi);

// Bind API to Property
router.post('/api/bind', apiController.bindApiToProperty); // New bind route

// Unbind API from Property
router.post('/api/unbind', apiController.unbindApiToProperty); // New unbind route

module.exports = router;
