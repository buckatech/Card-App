/**
 * 
 * @param {Object} - Object 
 * Applies shift to first element of every array in object values 
 */
exports.removeFromValues = (target, int) => {
  targetArr = Object.keys(target)
  targetArr.forEach(element => {
    target[element].splice(int, 1)
  });
  return target
}