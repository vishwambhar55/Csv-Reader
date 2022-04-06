const fileController = require('./filecontroller');
const uploadedFileNames = fileController.uploadedFileNames;
const array = uploadedFileNames();   //array containing the csv filenames

module.exports.home = function(req, res){
    
    return res.render('home.ejs', {
        files: array
    });
}