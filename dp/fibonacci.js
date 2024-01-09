const fib = n => {
  // if(n === 0) return 0
  // if(n < 2) return 1;
  // return fib(n -1) + fib(n - 2)
  if(n === 0) return 0;
  const dp = new Array(n+1).fill(1);
  dp[n] = 0;
  for(let i = n -1; i > 0; i--) {
    dp[i - 1] = dp[i] + dp[i +1]
  }

  return dp[0];
}

module.exports = fib