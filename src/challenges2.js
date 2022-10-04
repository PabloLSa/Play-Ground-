// Desafio 11
function generatePhoneNumber(numbers) {

if (numbers.length!==11) {

  return 'Array com tamanho incorreto.' ;
}

for (let index of numbers) {

  if(numbers[index]<0||numbers[index]>9 ){

    return  'não é possível gerar um número de telefone com esses valores' ;
  }
}
  let counts = {};

  numbers.forEach((count) => {

    counts[count] = (counts[count]||0)+1;

    
  });

  const maxValue =  Math.max(...Object.values(counts));

    if (maxValue >=3) {

      return 'não é possível gerar um número de telefone com esses valores';
      
    }

    let phone = numbers.join('');
    let ddd = phone.substring(0,2);
    let phone1 = phone.substring(2,7);
    let phone2 = phone.substring(7,11);

    return '('+ddd +') ' + phone1 + "-"+phone2;
  
}
  



// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
