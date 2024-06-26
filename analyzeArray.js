function analyzeArray(array) {
  const obj = {}
  obj.average = array.reduce((a, b) => a + b, 0) / array.length
  obj.min = Math.min(...array)
  obj.max = Math.max(...array)
  obj.length = array.length
  return obj
}
module.exports = analyzeArray
