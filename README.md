nropf
=====

node Read-Only property file

nropf is a simple way to use properties file. It allow user to add comments inside the properties file, which could not be achieved whitin a standard json file.
There is also a cache mecanism. Once a file is used, it won't be read again event if mutiple modules required the same properties file, which is nice to centralize the conf of the app

File format
===========
The simplest way to use it is a key value pair separated by '='
```
key=value
```
 You could also use comment inside the file
 ```
 # this is a comment
```
 If the line start with white space, it will be ignored
```
  key2=value2
  #comment
```
Usage
=====

```
var properties = require("properties").use("myfile")
properties.key
```

NPM
===
This package can be found on NPM https://npmjs.org/package/nropf