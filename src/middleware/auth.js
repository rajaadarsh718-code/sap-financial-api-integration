// src/middleware/auth.js
const auth = (req, res, next) => {
    const apiKey = req.header('x-api-key');

    // Agar request mein API key nahi hai ya galat hai
    if (!apiKey || apiKey !== process.env.INTERNAL_API_KEY) {
        return res.status(401).json({ message: 'Access Denied: Invalid API Key' });
    }
    next();
};

module.exports = auth;