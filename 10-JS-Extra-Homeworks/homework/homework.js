// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  resultado=[];
  let i =0;
    for(const propiedad in objeto){
      resultado[i++]=[propiedad,objeto[propiedad]];
    }
 return resultado;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

let resultado={};
let cont=1;
for(let i=0;i< string.length;i++)
{

  for(let j=0;j< string.length;j++)
  {
    if(string[i] == string[j])
    {
      resultado[string[i]]=null;
      resultado[string[i]]=cont++;
    }
  }
  cont=1;
}
return resultado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 
  let mayuscula ="";
  let palabraMayuscula="";
  let palabraMinuscula="";

for(let i=0;i< s.length;i++)
  {
      mayuscula =  s[i].toUpperCase();
      if (s[i] === mayuscula)
      {
          palabraMayuscula += s[i];
      }
      else
      {
          palabraMinuscula += s[i];
      }
  }
  return palabraMayuscula + palabraMinuscula;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let resultado ="";
  let invertida ="";
  array=str.split(" ");
  for(let i=0; i<array.length;i++)
  {
    arrayPalabra= array[i].split("");
    for(let j=0; j<arrayPalabra.length;j++)
      {
          invertida += arrayPalabra[arrayPalabra.length -1 -j];
      }
      array[i]=invertida;
      invertida="";
  }
  for(i=0; i<array.length;i++)
  {
    if(i+1 == array.length)
    {  
      resultado += array[i];
    }
    else
    {
      resultado += array[i] + " ";
    }
  }  
  return resultado;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroString = numero.toString();
  let arrayNumero = numeroString.split('');
  let b=0;
  for(let i=0; i<arrayNumero.length/2;i++)
  {
      if(arrayNumero[i] !== arrayNumero[arrayNumero.length -1 -i]){
        b = 1;
        break;
      }
  }
  if(b == 0){
    return "Es capicua";
  }
  else{
    return "No es capicua";

  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  arrayCadena = cadena.split('');
  resultado = "";
  for(let i=0;i<arrayCadena.length;i++)
  {
    if(!(arrayCadena[i]=="a" ||arrayCadena[i]=="b" || arrayCadena[i]=="c" ))
    {
      resultado += cadena[i];
    }
  }
  return resultado;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let aux="";
  for (var i = 0; i < arr.length; i++) { 
     for (var j = 0; j < (arr.length - i - 1); j++) { 
        if(arr[j].length > arr[j+1].length) {
           aux = arr[j]; 
           arr[j] = arr[j+1]; 
           arr[j+1] = aux; 
         }
      }        
   }
   return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  //let union=[];
  /*for (var i = 0; i < arreglo1.length; i++) { 
    for (var j = 0; j < arreglo2.length; j++) { 
        if(arreglo1[i] === arreglo2[j])
        {
          union.push(arreglo1[i]);
        }
    }
  }*/

  const union = arreglo1.filter(value => arreglo2.includes(value));
return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

