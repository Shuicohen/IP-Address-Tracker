const express = require('express');
const { getIPDetails } = require('../controllers/ipController');

const router = express.Router();

router.get('/:ip', getIPDetails);

module.exports = router;