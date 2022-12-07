const findSecondLargeNumber = arr => {
  let large = 0;
  let secondLarge = 0;
  arr.forEach(n => {
    if(n > large) {
      secondLarge = large;
      large = n;
    } else if(n > secondLarge) {
      secondLarge = large;
    }
  })
  return secondLarge;
}

module.exports = findSecondLargeNumber;