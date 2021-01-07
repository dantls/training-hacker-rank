function diagonalDifference(arr) {
  let diagonal_left = 0
  let diagonal_right = 0
  for (let i = 0 ; i < arr.length; i++) {
    for (let j = arr.length-1-i ; j >= 0 ; j--) {
        diagonal_right += arr[i][j];
        break;
    }
  }
  for (let i = 0 ; i < arr.length; i++) {
    for (let j = 0 ; j < arr.length; j++) {
       if (i === j){
        diagonal_left += arr[i][j];
       } 
    }
  }
  return (diagonal_left - diagonal_right) >= 0 ? (diagonal_left - diagonal_right) : -(diagonal_left - diagonal_right)
}