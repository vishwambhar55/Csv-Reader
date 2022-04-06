const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homecontroller');

router.get('/', homeController.home);
router.use('/file',require('./file'));
module.exports = router;
