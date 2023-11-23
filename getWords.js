const getWords = (arr, word) => {
  let rowMatch = false;
  let columnMatch = true;
  let diagonalMatch = true;
  const column = [];
  const diagonal = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].join("").indexOf(word) > -1) rowMatch = true;
    for (let j = 0; j < arr[i].length; j++) {
      if (i == 0) {
        if (!column[j]) {
          column[j] = [arr[j]];
        } else {
          column[j] += arr[j];
        }
      }
      if(i == j && i < arr.length - word.length) {
        diagonal[i] += arr[i];
      }
    }
  }
  columnMatch = column.some(item => item.indexOf(word));
  diagonalMatch = diagonal.some(item => item.indexOf(word));
  
  return rowMatch && columnMatch && diagonalMatch;
};

module.exports = getWords;
