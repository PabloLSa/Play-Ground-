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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
