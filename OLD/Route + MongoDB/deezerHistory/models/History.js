var mongoose = require('mongoose');

var HistorySchema = new mongoose.Schema({
	title : String,
	artist : String,
	album : String,
	time : String,
	imageUrl : String,
	listenedAtStr : String,
	listenedAt : { type : Date, default : Date.now },
	selected : Boolean
});

module.exports = mongoose.model('History', HistorySchema);