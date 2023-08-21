// Declarar un arreglo para almacenar las edades let edades = []; 
// Ingresar las edades de los 10 estudiantes for (let i = 1; i <= 10; i++)
 { let edad = parseInt(prompt(`Ingrese la edad del estudiante $ {i}:`)); 
 edades.push (edad); } 
 // Imprimir las edades ingresadas console.log("Edades ingresadas:"); 
 for (let i = 0; i < edades.length; i++) 
 { console.log (`Estudiante ${i + 1}: ${edades [i] } años`); }
