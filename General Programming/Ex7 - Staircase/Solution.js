function staircase(n) {
  let result='';
  for (var i = n-1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      (i >= j+1)? result += ' ' : result += '#'
    }
    (i === 0)? '' : result += '\n'
  }
  console.log(result)
}
