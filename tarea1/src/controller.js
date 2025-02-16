require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

const getSources = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/sources?apiKey=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTopHeadlines = async (req, res) => {
    try {
        const { country, category, sources, q } = req.query;
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: { country, category, sources, q, apiKey: API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEverything = async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) return res.status(400).json({ error: "Query parameter 'q' is required" });

        const response = await axios.get(`${BASE_URL}/everything`, {
            params: { q, apiKey: API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getSources, getTopHeadlines, getEverything };
