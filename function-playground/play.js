var fc  = require("../lib/es6-functional.js") 

var array = [1,2,3]

fc.forEach(array,(data) => console.log(data));

var object = {a:1,b:2}

fc.forEachObject(object,(k,v) => {
  console.log(k+":"+v)
})