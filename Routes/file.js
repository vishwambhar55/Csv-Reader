// const multer = require('multer');  //using multer for file upload
// const path = require('path');      
// const csv = require('csv-parser');  //using csv-parser to convert the data into JSON format
// const fs = require('fs');
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/filecontroller');


router.post('/upload',fileController.upload);
router.get('/open',fileController.open);        //route for opening already uploaded file
router.get('/delete',fileController.delete);    //route for deleting a particular file

module.exports = router;