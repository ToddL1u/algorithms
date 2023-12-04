const sudokuSolution = (board) => {
  dfs(board)
  return board
}

const bfs = board => {
  let stack = [board]
  
}

const dfs = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') continue;
      for (let k = 1; k <= 9; k++) {
        let n = k.toString()
        if (validate(i, j, n, board)) {
          board[i][j] = n;
          if (dfs(board)) return true
        }
      }
      board[i][j] = '.'
      return false;
    }
  }
  return true
}

function validate(row, column, num, arr) {
  const rowPivot = Math.floor(row / 3) * 3;
  const columnPivot = Math.floor(column / 3) * 3;
  for (let i = 0; i < 9; i++) {
    if (arr[i][column] === num || arr[row][i] === num) return false;
    if (arr[rowPivot + Math.floor(i / 3)][columnPivot + Math.floor(i % 3)] === num) return false;
  }
  return true;
}

module.exports = sudokuSolution;