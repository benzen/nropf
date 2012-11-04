var assert = require("assert");
var properties = require("../nropf.js").use(__dirname + "/dummy.properties");

//simple k,v
assert.strictEqual( properties.key, "val", "the expected value for property key is val")

//comment
assert.strictEqual( properties.commented_key, undefined, "this key is not define")

//spaced k,v
assert.strictEqual( properties.spacedKey, "spacedVal", "the expected value for property spacedKey is spacedVal")

//spaced comment
assert.strictEqual( properties.spaced_commented_key, undefined, "this key is not define")