function revert(arrayNumbers) {
  let resposta = '';
  arrayNumbers.reverse().forEach(item => {
     resposta +=`${item} `;
  });
  console.log(resposta);
}
