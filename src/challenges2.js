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
function triangleCheck(lineA, lineB, lineC) {

 if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC )) {

  return true;
  
    } else{

  return false;

   }

}

// Desafio 13
function hydrate(bebida) {

  let numbers = bebida.match(/\d+/g).map(Number);

  let soma = 0;
  for (let index = 0; index < numbers.length; index +=1) {
    soma +=numbers[index];
    
  }
  if ( soma !==1){
    return `${soma} copos de água`;
    }
    return `${soma} copo de água`;

}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
