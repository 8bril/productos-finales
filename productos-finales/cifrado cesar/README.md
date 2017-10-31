## CEASER CIPHER

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

- Crear una variable llamada phrase que arroje un prompt que pida al usuario ingresar una frase o string
  - Si el usuario ingresa un espacio o número se enviara un alert
  - Si el usuario ingresa un tipo de dato valido ingresara al programa
- Crear una función llamada “caesarCipher” que tome como parámetro la variable phrase para acceder al elemento que ingreso el usuario
- Declaremos un arreglo vacío dentro de la función
- Crear una variable llamada strPhrase que recorra todo el arreglo
- Acceder a cada elemento del array con un for
- Declarar dentro de for i = 0
- Incrementar de uno en uno dependiendo de la frase que ingrese el usuario
- Aplicar el metodo push a la variable fillArray para que devuelva la nueva longitud del arreglo
- Por medio de String.fromCharCode convertimos el numero que hay que pasar a letra con base en la formula posición + valor fijo y sacar el residuo de ello en % 26.
- Meter el elemento del arreglo en posición i al strPhrase
- charCodeAt indicamos el inicio del arreglo para buscar su numero ascii. -65.
- Repetir hasta convertir todos los datos ingresados por el usuario en Cifrado Cesar
- Declarar una variable llamada “result” que imprima “fillArray” con sus elementos con el método .join(‘’)”
- Retornar resultado
- Llamar a la función ceaserCipher con el parámetro phrase para que ingrese los datos proporcionados por el usuario
- Ingresar los datos en pantalla por medio de document.write

![alt text](https://i.imgur.com/v4jnqQy.jpg)