 // JavaScript Document
var mongoose = require('mongoose');
var BDTienda = mongoose.connect('mongodb://localhost/BDTienda1',{
	useMongoClient: true,
});
module.exports = BDTienda;
