// Desafio 1
function compareTrue(param1,param2) {

  if (param1===true&&param2===true) {
    return true;
  }
  return false;

}   


// Desafio 2
function calcArea(base,height) {
return (base*height) /2;
}

// Desafio 3
function splitSentence(xablau) {
  return xablau.split(' ');
}

// Desafio 4
function concatName(array) {
 let nameConcat = array[array.length-1]+ ", " + array[0];
 return nameConcat;
}
//concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolilo'])//

// Desafio 5
function footballPoints(vitorias,empates) {
  wins=3;
  ties=1;
  empates=empates*ties;
  vitorias=vitorias*wins;
  return vitorias+empates;
  
}


// Desafio 6
function highestCount(count) {

  let numeroMaior=-20;
  let countHighest =0;

  for (let index = 0; index < count.length; index +=1) {

    if(count[index]>numeroMaior){

      numeroMaior = count[index];    
    }
    
  }
  for (let index = 0; index < count.length; index+=1) {
    if (numeroMaior===count[index]) {

       countHighest+=1;
      
    }
    
  }
  //console.log("O numero maior é = "+ numeroMaior);
return countHighest
}
//highestCount([300,50,300,100])

// Desafio 7
function catAndMouse(mouse, cat1,cat2) {
  let gatoPosi1 = Math.abs(mouse - cat1);
  let gatoPosi2 = Math.abs(mouse - cat2);

  if (gatoPosi1 < gatoPosi2) {

    return 'cat1';

  } else if (gatoPosi1 > gatoPosi2) {

    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';

}

// Desafio 8
function fizzBuzz(numbers) {
  let stringResultado =[];
  for (let index = 0; index < numbers.length; index +=1) {

    if(numbers[index] % 3 === 0){

      stringResultado.push('fizz');

    }else if(numbers[index] % 5 === 0){

      stringResultado.push('buzz');

    }else if(numbers[index] % 3 === 0 && numbers[index] % 5 ==0){
      stringResultado.push('fizzBuzz');

    } else {
      stringResultado.push('bug!');
    }
    return stringResultado;
  }
  
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
