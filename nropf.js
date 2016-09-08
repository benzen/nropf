fs = require("fs")

var loadedProperties = {};
exports.use = function( filePath ){
  if( loadedProperties[filePath] ){
    return loadedProperties[filePath];
  }

  var properties = {};
  var file = fs.readFileSync(filePath,"utf-8");
  file.split("\n").forEach(function(line){

    var trimmedLine = line.trim();
    if( trimmedLine.substring(0,1) === "#" ) return;
    if ( trimmedLine === "") return;

    var keyAndValue = trimmedLine.split("=");
    var key = keyAndValue[0].trim();
    var value = keyAndValue.slice(1).join("=").trim();

    properties[ key ] = value;

  });
  loadedProperties[filePath]=properties;
  return properties;
}
