const { signup, login, logout, getusers }  = require('../controlers/userController');
const express = require('express');

const router = express.Router();

router.post('/sign',signup);
router.post('/login',login);
router.get('/logout',logout);
router.get('/get',getusers);


module.exports = router;