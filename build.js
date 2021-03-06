var _ = require("lodash");
var fs = require("fs");
var isBlank = require("./utils/isBlank");
var comments = require('js-comments');

var getValidationFns = function(callback){
  fs.readdir("./v/", function(err, files){
    if(err) return callback(err);
    callback(null, _.unique(_.map(files, function(file){
      return file.split(".")[0];
    })).sort());
  });
};

var getFnComments = function(fn){
  var str = fs.readFileSync("./v/" + fn + ".js", "utf8");
  var blocks = comments.parse(str, {});
  return _.reject(_.map(blocks, function(block){
    return block.comment.content;
  }), isBlank).join("\n\n");
};

var dont_edit_msg = "Don't edit this by hand, see build.js";

var buildJSFile = function(file, js_code){
  var code = "";
  code += "//" + dont_edit_msg + "\n";
  code += "//" + dont_edit_msg + "\n";
  code += "//" + dont_edit_msg + "\n";
  code += "//" + dont_edit_msg + "\n";
  code += js_code + "\n";
  code += "//" + dont_edit_msg + "\n";
  code += "//" + dont_edit_msg + "\n";
  code += "//" + dont_edit_msg + "\n";
  code += "//" + dont_edit_msg + "\n";
  fs.writeFileSync(file, code);
};


getValidationFns(function(err, fns){

  ////////////////////////////////////////////////////////////////
  //
  // index.js
  //
  var code = "";
  code += "module.exports = {\n";
  code += _.map(fns, function(fn){
    return "  " + fn + ": require('./v/" + fn + "')";
  }).join(",\n") + "\n";
  code += "};";
  buildJSFile("./index.js", code);

  ////////////////////////////////////////////////////////////////
  //
  // build test files
  //
  _.each(fns, function(fn){
    var test_file = "./v/" + fn + ".test.js";
    if(fs.existsSync(test_file)){
      return;
    }
    var code = "";
    code += "var test = require('tape');\n";
    code += "var "+fn+" = require('./" + fn + "');\n";
    code += "\n";
    code += "test('" + fn + "', function(t){\n";
    code += "  t.ok(false, 'TODO write tests');\n";
    code += "  t.end();\n";
    code += "});\n";
    fs.writeFileSync(test_file, code);
  });

  ////////////////////////////////////////////////////////////////
  //
  // tests.js
  //
  buildJSFile("./tests.js", _.map(fns, function(fn){
    return "require('./v/" + fn + ".test');";
  }).join("\n"));

  ////////////////////////////////////////////////////////////////
  //
  // package.json
  //
  var json = require("./package.json")
  json.files = [
    "index.js",
    "utils/isBlank.js"
  ].concat(_.map(fns, function(fn){
    return "v/" + fn + ".js";
  }))
  fs.writeFileSync("./package.json", JSON.stringify(json, undefined, 2) + "\n");

  ////////////////////////////////////////////////////////////////
  //
  // README.md
  //
  var readme = fs.readFileSync("./readme-template.md", "utf8");

  readme = readme.replace("{{fn docs}}", _.map(fns, function(fn){
    var doc = "### " + fn + "\n";
    doc += getFnComments(fn);
    return doc.trim();
  }).join("\n\n"));

  var md_dont_edit_msg = "";
  md_dont_edit_msg += "[//]: # (Don't edit this by hand, edit readme-template.md)\n";
  md_dont_edit_msg += "[//]: # (Don't edit this by hand, edit readme-template.md)\n";
  md_dont_edit_msg += "[//]: # (Don't edit this by hand, edit readme-template.md)\n";
  md_dont_edit_msg += "[//]: # (Don't edit this by hand, edit readme-template.md)\n";
  readme = md_dont_edit_msg + readme + md_dont_edit_msg;

  fs.writeFileSync("./README.md", readme);
});
