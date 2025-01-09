const axios = require('axios');

const getIPDetails = async (req, res) => {
    const { ip } = req.params;

    try {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city`, {
            params: {
              apiKey: process.env.IPIFY_API_KEY,
              ipAddress: ip,
            },
          });
          res.json(response.data); 
    } catch (error) {
        console.error("Error fetching IP details:", error.message);
        res.status(500).json({ error: "Failed to fetch IP details" });
    }
};

module.exports = { getIPDetails };