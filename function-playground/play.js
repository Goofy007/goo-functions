var fc  = require("../lib/es6-functional.js") 

var array = [1,2,3]

fc.forEach(array,(data) => console.log(data));

var object = {a:1,b:2}

fc.forEachObject(object,(k,v) => {
  console.log(k+":"+v)
})

fc.forEach([1,2,3,4,5],(number) => {
  fc.unless((number % 2),() => {
    console.log(number, "is even")
  })
})

fc.times(100,(number) => {
  fc.unless((number % 2 ),() => {
    console.log(number,"is even")
  })
})

console.log(
  fc.every([NaN,NaN,NaN],isNaN)
);

fc.tap("fun")((it) => console.log("val is", it));

var doPayment = fc.once(() => {
  console.log("payment is done")
});


doPayment();

doPayment();











