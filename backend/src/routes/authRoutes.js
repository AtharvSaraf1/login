const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

if (!authController.register || !authController.login) {
    console.log("Value of register:", authController.register);
    console.log("Value of login:", authController.login);
}
router.post('/register', authController.register);
router.post('/login', authController.login);
module.exports = router;