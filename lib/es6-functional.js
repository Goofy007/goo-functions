
const forEach = (array, fn) => {
  let i;
  for (i = 0; i < array.length; i++)
    fn(array[i])
}

const forEachObject = (obj, fn) => {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      // 以key和value作为参数调用fn
      fn(property, obj[property])
    }
  }
}

const unless = (predicate, fn) => {
  if (!predicate)
    fn()
}

const times = (times, fn) => {
  for (var i = 0; i < times; i++)
    fn(i)
}

const every = (arr, fn) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    result = result && fn(arr[i])
  }
  return result;
}

const every2 = (arr, fn) => {
  let result = true;
  for (const value of arr) {
    result = result && fn(result)
  }
  return result;
}


const sortBy = (property) => {
 var result = (a[property] < b[property]) ? -1 :(a[property] > b[property]) ? 1 : 0;
  return result;
}

const tap = (value) => (fn) => {
  typeof(fn) === 'function' && fn(value);
  console.log(value);
}

const once = (fn) => {
  let done = false;

  return function () {
    return done ? undefined : ((done = true),fn.apply(this,arguments))
  }
}

const memoized = (fn) => {
  const loolupTable = {};
  
  return (arg) => lookupTable[arg] || (loolupTable[arg] = fn(arg));
}

let fastFactorial = memoized(
  (n) => {
    if (n===0) {return 1}
    return n * fastFactorial(n-1);
  }
)

const forEach = (arr,fn) => {
  for(const val of arr)
    fn(val)
}

const map = (arr,fn) => {
  let results = [];
  for(const value of arr)
    results.push(fn(value))
  return results;
}

const filter = (array,fn) => {
  let results = [];
  for(const value of array)
    (fn(value)) ? results.push(value) : undefined
  return results;
}

// filter(apressBooks,(book) => book.rating[0] > 4.5)

module.exports = {
  forEach,
  forEachObject,
  unless,
  times,
  every,
  sortBy,
  tap,
  once,
  memoized,
  map,
  filter
}

