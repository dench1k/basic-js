module.exports = function transform(arr) {
  let modifiedArr = [];
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-prev') {
      if (modifiedArr[i - 1]) {
        modifiedArr[i - 1] = '--discard-value';
      }
    } else if (arr[i] === '--discard-next') {
      if (arr[i + 1]) {
        modifiedArr.push('--discard-value');
      }
    } else if (arr[i] === '--double-next') {
      modifiedArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev') {
      modifiedArr.push(arr[i - 1]);
    } else {
      if (arr[i - 1] === '--discard-next') {
        modifiedArr.push('--discard-value');
      } else {
        modifiedArr.push(arr[i]);
      }
    }
  }
  return modifiedArr.filter(item => item !== '--discard-value' && item !== undefined);

};
