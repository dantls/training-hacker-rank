function simpleArraySum(ar) {
  return ar.reduce((acc,current) => {
    return acc += current
  } , 0)
}