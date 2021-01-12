function multiplication_table(multiplier){  
  for(let i=1; i<=10 ; i++){
      console.log(`${multiplier} x ${i} = ${multiplier * i}`)
  }
}



function main() {
  const n = parseInt(readLine(), 10);
  multiplication_table(n);
}