exports.removeFromValues = (target) => {
  targetArr = Object.keys(target)
  targetArr.forEach(element => {
    target[element].shift()
  });
  return target
}