fs = require("fs")

exports.use = function(filePath){
  var properties = {};
  var file = fs.readFileSync(filePath,"utf-8");
  file.split("\n").forEach(function(line){
    var trimmedLine = line.trim();
    if( trimmedLine.substring(0,1) !== "#" ){
      var keyAndValue = trimmedLine.split("=");
      properties[ keyAndValue[0] ] = keyAndValue[1];
    }
  });
  return properties;
}
