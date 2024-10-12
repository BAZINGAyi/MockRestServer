const express = require('express');
const router = express.Router();
const apiPropertyController = require('../controllers/apiPropertyController');

// Create API Property
router.post('/api-properties', apiPropertyController.createApiProperty);

// Get all API Properties
router.get('/api-properties', apiPropertyController.getAllApiProperties);

// Update API Property
router.put('/api-properties/:id', apiPropertyController.updateApiProperty);

// Delete API Property
router.delete('/api-properties/:id', apiPropertyController.deleteApiProperty);

module.exports = router;
