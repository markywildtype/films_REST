const express = require('express');
const router = new express.Router();

router.use('/films', require('./filmsController'));

//HOME
router.get('/', function(req, res){

});


module.exports = router;
