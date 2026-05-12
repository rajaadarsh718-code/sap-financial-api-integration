const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Routes import (Check path carefully)
const apiRoutes = require('./src/routes/api'); 

dotenv.config();

const app = express(); // Pehle app define hoga

// Middleware setup (Initialization ke baad)
app.use(cors()); // Ab ye sahi chalega
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
    res.send('Zetheta Custom API Integration Server is Running...');
});

// API Routes
app.use('/api/v1', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});