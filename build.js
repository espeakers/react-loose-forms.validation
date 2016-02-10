var _ = require("lodash");
var fs = require("fs");

var getValidationFns = function(callback){
	fs.readdir("./v/", function(err, files){
		if(err) return callback(err);
		callback(null, _.map(files, function(file){
			return file.split(".")[0];
		}).sort());
	});
};

var dont_edit_msg = "Don't edit this by hand, see build.js";


getValidationFns(function(err, fns){

	////////////////////////////////////////////////////////////////
	//
	// index.js
	//
	var code = "";
	code += "//" + dont_edit_msg + "\n";
	code += "//" + dont_edit_msg + "\n";
	code += "//" + dont_edit_msg + "\n";
	code += "//" + dont_edit_msg + "\n";
	code += "module.exports = {\n";
	code += _.map(fns, function(fn){
		return "  " + fn + ": require('./v/" + fn + "')";
	}).join(",\n") + "\n";
	code += "};\n";
	code += "//" + dont_edit_msg + "\n";
	code += "//" + dont_edit_msg + "\n";
	code += "//" + dont_edit_msg + "\n";
	code += "//" + dont_edit_msg + "\n";

	fs.writeFileSync("./index.js", code);
});
