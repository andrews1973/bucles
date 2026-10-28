
/*
Ejercicio 1: Suma del 1 al 100

Escribe un programa en JavaScript que calcule la suma de todos los números enteros del 1 al 100. El resultado debe imprimirse en la consola.


*/

function sumarCien(){
    let suma = 0;
    for (let i=1; i<=100; i++){
        suma += i;
    }
    console.log(suma);
}
sumarCien();

/*
Ejercicio 2: Números pares del 1 al 50
Escribe un programa que imprima en consola todos los números pares comprendidos entre 1 y 50 (inclusive). Recuerda que un número es par si el resto de dividirlo por 2 es 0.
*/
function paresCincuenta(){
    for (let i=0; i<=50; i++){
        if (i % 2 ==0) console.log(i);
    }
    
}
paresCincuenta();
/*
Ejercicio 3: Tabla de multiplicar

Pide al usuario un número mediante prompt(). Luego, imprime su tabla de multiplicar del 1 al 10. Ejemplo de salida si el usuario ingresa 5:

5 x 1 = 5  
5 x 2 = 10  
...  
5 x 10 = 50
*/

let numero;

do {
    numero = parseInt(prompt('Dime un numero, te saco su tabla de multiplicar'));  
} while (isNaN(numero)); 

console.log('TABLA DE MULTIPLICAR DEL ' + numero);
for (let i = 1; i <= 10; i++) {
    console.log(numero + " X " + i + " = " + (numero * i));
}


/*
Ejercicio 4: Cuenta regresiva

Escribe un programa que imprima una cuenta regresiva desde 10 hasta 1. Cada número debe mostrarse en una línea dife

*/

function cuentaRegresiva(){
    for (let i=10; i>=1; i--){
        console.log(i + '\n'); // salto de linea manual: \n, consolelog hace ya salto de linea
    }
    
}
cuentaRegresiva();
/*
Ejercicio 5: Factorial de un número

Pide al usuario un número mediante prompt() y calcula su factorial. El factorial de un número entero positivo n (n!) es el producto de todos los enteros positivos desde 1 hasta n.

Ejemplo:
5! = 5 x 4 x 3 x 2 x 1 = 120
*/

let numero2 = prompt('Dime otro numero, hallare su factorial');

numero2 = parseInt(numero2);

while (isNaN(numero2)) {
   numero2 = prompt('¿Otra vez?... Que Tiene que ser un NUMERO, pesado!!!');
   numero2 = parseInt(numero2); 
}

let resultado = 1;
for (let i = 1; i <= numero2; i++) {
    resultado *= i;
}

console.log('Factorial de ' + numero2 + ': ');
console.log(resultado);