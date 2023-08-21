let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes:"));
 let sumaEdadesMayores = 0; 
 let sumaEdadesMenores = 0; 
 let cantidadMayores = 0; 
 let cantidadMenores = 0; 
 for (let i = 1; i <= cantidadEstudiantes; i++)
  { let codigo = prompt("Ingrese el código del estudiante #" + i + ":"); 
  let edad = parseInt(prompt("Ingrese la edad del estudiante #" + i + ":")); 
  if 
  (edad > 21) { sumaEdadesMayores += edad; cantidadMayores++; } 
  else { sumaEdadesMenores += edad; cantidadMenores++; } } 
  let promedioMayores = sumaEdadesMayores / cantidadMayores; 
  let promedioMenores = sumaEdadesMenores / cantidadMenores; 
  console.log("Promedio de edades de estudiantes mayores de 21 años: " + promedioMayores.number(2)); 
  console.log("Promedio de edades de estudiantes menores o iguales a 21 años: " + promedioMenores.number(2));