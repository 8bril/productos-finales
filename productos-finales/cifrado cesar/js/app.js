var phrase = (prompt('Encipher your phrase')).toUpperCase(); // Pediremos al usuario ingresar una frase 

 if ( /^[a-zA-Z]*$/.test(phrase) === false ) {
  alert ('Write Only Letters');  // si el usuario ingresa un un número o espacio no ingresara al programa
  }

function caesarCipher(phrase){
  var fillArray = []; // implementamos el array vacio a recorrer
  var strPhrase = phrase.split(''); // nos devolvera el array con sus elementos

  for( var i = 0; i < strPhrase.length; i++){
      fillArray.push(String.fromCharCode((((strPhrase[i].charCodeAt()-65)+33)%26)+65)); 
      // incrementaremos cada caracter ingresado conforme a la formula asignada para que recorra 7 veces
 
  var result = fillArray.join(''); // aroja el resultado de los elmentos 

    }

  return result; //  
 }

  document.write('Your result of your phrase is ' + caesarCipher(phrase)); // imprime el resultado de la frase cifrada en pantalla