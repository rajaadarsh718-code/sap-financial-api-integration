const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Check karein ye file 'middleware' folder mein hai
const { runIntegration } = require('../controllers/integrationController');

// POST request for sync
router.post('/sync', auth, runIntegration);

module.exports = router;