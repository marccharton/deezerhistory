///
/// @filename : app/service/test.js
/// @date_creation : 13/10/2105
///

/* GET home page. */
exports.GETIndex = function (req, res, next) {
	res.json("Deezer History API");	
};

/* POST home page. */
exports.POSTPage = function (req, res, next) {
	//console.log(req);
	res.json("Admettons qu'on soit en post");
};

