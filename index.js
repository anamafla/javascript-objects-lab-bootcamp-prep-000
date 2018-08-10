let recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  let newObj = Object.assign({},object)
  newObj[key] = value;
  return newObj;
}