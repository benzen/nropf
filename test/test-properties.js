var assert = require("assert");

var t_before_load_1 = new Date().getUTCMilliseconds();
var properties = require("../nropf.js").use(__dirname + "/dummy.properties");
var t_after_load_1 = new Date().getUTCMilliseconds();

var t_before_load_2 = new Date().getUTCMilliseconds();
var properties2 = require("../nropf.js").use(__dirname + "/dummy.properties");
var t_after_load_2 = new Date().getUTCMilliseconds();

var load_time_1 = t_after_load_1 - t_before_load_1 ;
var load_time_2 = t_after_load_2 - t_before_load_2 ;
assert(load_time_1>=load_time_2, "first load time must be bigger since it read a file")
//simple k,v
assert.strictEqual( properties.key, "val", "the expected value for property key is val")

//comment
assert.strictEqual( properties.commented_key, undefined, "this key is not define")

//spaced k,v
assert.strictEqual( properties.spacedKey, "spacedVal", "the expected value for property spacedKey is spacedVal")

//spaced comment
assert.strictEqual( properties.spaced_commented_key, undefined, "this key is not define")

//space after space
assert.strictEqual( properties.key_ended_by_space, "value_stated_by_space", "value and keys must be trimed");