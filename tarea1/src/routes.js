const express = require('express');
const { getSources, getTopHeadlines, getEverything } = require('./controller');

const router = express.Router();

router.get('/sources', getSources);
router.get('/headlines', getTopHeadlines);
router.get('/news', getEverything);

module.exports = router;
