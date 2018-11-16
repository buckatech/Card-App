/**
 * 
 * @param {Object} - Object 
 * Applies shift to first element of every array in object values 
 */
exports.removeFromValues = (target) => {
  targetArr = Object.keys(target)
  targetArr.forEach(element => {
    target[element].shift()
  });
  return target
}