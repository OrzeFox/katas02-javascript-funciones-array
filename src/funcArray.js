/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
  if (numero1 >= numero2) {
    return numero1;
  } else {
    return numero2;
  }
}

export function findLongestWord(array) {
  let longestWord = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }

  return longestWord;
}

export function sumArray(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }

  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}
export function averageNumbers(array) {
  if (array.length === 0) {
    return undefined;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
export function averageWordLength(array) {
  if (array.length === 0) {
    return undefined;
  }
  let wordLength = 0;
  for (let i = 0; i < array.length; i++) {
    wordLength += array[i].length;
  }
  return wordLength / array.length;
}
export function uniquifyArray(array) {
  if (array.length === 0) {
    return undefined;
  }

  const uniqueArray = [];
  for (const num of array) {
    if (uniqueArray.indexOf(num) === -1) {
      uniqueArray.push(num);
    }
  }

  return uniqueArray;
}

export function doesWordExist(array, palabra) {
  if (array.length === 0) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === palabra) {
      return true;
    }
  }
  return false;
}
export function howManyTimes(array,string) {
  if (array.length == 0){
    return undefined
  }
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      count++;
    }
  }
  return count
  
}
export function greatestProduct(array) {

}
