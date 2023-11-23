var mySqrt = function (x) {
  if (x == 0 || x == 1) return x;
  let left = 1,
    right = x,
    mid;
  while (left <= right) {
    mid = Math.ceil((left + right) / 2);
    let square = mid * mid;
    if (square == x) return mid;
    square > x ? (right = mid - 1) : (left = mid + 1);
  }
  return Math.floor(right);
};

module.exports = mySqrt;
