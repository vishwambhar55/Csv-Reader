const express = require('express');
const router = express.Router();
const fileController = require('../controllers/filecontroller');


router.post('/upload',fileController.upload);
router.get('/open',fileController.open);        //route for opening already uploaded file
router.get('/delete',fileController.delete);    //route for deleting a particular file

module.exports = router;