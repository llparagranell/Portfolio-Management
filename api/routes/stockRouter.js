const express = require('express');
const { stockdata, getstock } = require('../controlers/stockController');

const router = express.Router();

router.post('/stockdata',stockdata);
router.get('/getstock',getstock)
module.exports = router;