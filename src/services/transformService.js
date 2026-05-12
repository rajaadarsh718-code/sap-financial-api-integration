// src/services/transformService.js
const { mapSAPToFinancialData } = require('../utils/mapper');

const processFinancialData = (rawData) => {
    try {
        if (!rawData) return [];
        return mapSAPToFinancialData(rawData);
    } catch (error) {
        throw new Error("Transformation failed: " + error.message);
    }
};

// Ye line sabse zaroori hai
module.exports = { processFinancialData };