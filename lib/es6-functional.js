const forEach = (array,fn) => {
  let i;
  for(i = 0;i<array.length;i++)
    fn(array[i])
}

const forEachObject = (obj,fn) => {
  for(var property in obj) {
    if(obj.hasOwnProperty(property)) {
      // 以key和value作为参数调用fn
      fn(property,obj[property])
    }
  }
}


module.exports = {
  forEach,
  forEachObject
}

