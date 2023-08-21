let totalPersonas = parseInt(prompt("Ingrese el número total de personas en el grupo:"));
 let personasConHijos = 0; 
 let totalHijos = 0; 
 for (let i = 1; i <= totalPersonas; i++) { 
    let hijos = parseInt(prompt("Ingrese el número de hijos para la persona #" + i + ":")); 
    if (hijos > 0) { personasConHijos++; totalHijos += hijos; } } 
    let personasSinHijos = totalPersonas - personasConHijos; 
    let promedioHijos = totalHijos / personasConHijos; 
    console.log("Personas con hijos: " + personasConHijos); 
    console.log("Personas sin hijos: " + personasSinHijos); 
    console.log("Promedio de hijos por persona con hijos: " + promedioHijos(2));
