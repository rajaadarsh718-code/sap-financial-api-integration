// src/controllers/integrationController.js
const { fetchSAPData } = require('../services/sapService');
const { processFinancialData } = require('../services/transformService'); // Destructuring check karein

const runIntegration = async (req, res) => {
    try {
        console.log("Step 1: Fetching...");
        const rawData = await fetchSAPData();
        
        console.log("Step 2: Transforming...");
        const cleanData = processFinancialData(rawData); // Ab ye function mil jayega

        res.status(200).json({ success: true, data: cleanData });
    } catch (error) {
        console.error("Controller Error:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { runIntegration };