/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
    if (numero1 >= numero2) {
      return numero1;
    } else {
      return numero2;
    }
  }
  
export function findLongestWord(array) {
   let longestWorld = '';
       for (let i = 0; i < array.length; i++){
        if (array[i].length > longestWorld.length){
            longestWorld = array[i];
        }
       }
       return longestWorld
}
export function sumArray(array) {
    if (array.length === 0){
        return 0
    }
    if (array.length === 1){
        return array[0]
    }

    /* let suma = 0
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma */

    let suma = array.reduce(function(previousValue, currentValue){
        return previousValue + currentValue;
    },0);
    return suma
}
export function averageNumbers(array) {}
export function averageWordLength() {}
export function uniquifyArray() {}
export function doesWordExist(array, palabra) {}
export function howManyTimes() {}
export function greatestProduct() {}





