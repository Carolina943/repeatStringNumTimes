/*
Repite una cadena repite una cadena
Repite una cadena dada str (primer argumento) por un número (num) de veces
(segundo argumento). Devuelve una cadena vacía si num no es un número positivo.
Para este desafío, no utilices el método incorporado .repeat().
*/

function repeatStringNumTimes(str, num) {
  let result = "";
  for(let i = 0 ; i < num; i++){
    result+=str;
  }
  if(num > 0){
    return result;
  }
  else if(num===0){
    return "";
  }
  else if(num < 0){
    return "";
  }
}

repeatStringNumTimes("abc", -2);
