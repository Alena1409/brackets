module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let val of str) {
    if (bracketsConfig[val]) stack.push(val);
    if (Object.values(bracketsConfig).includes(val)) {
      if (stack.length === 0 || bracketsConfig[stack.pop()] !== val) return false
    }
  }
  return stack.length === 0;
}
