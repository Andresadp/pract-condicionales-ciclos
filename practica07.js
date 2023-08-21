let subtotal = 0; for (let i = 1; i <= 5; i++) { 
    let nombreProducto = prompt("Ingrese el nombre del producto #" + i + ":"); 
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto # " + i + ":")); subtotal += precioProducto;
 } 
    const iva = subtotal * 0.19; 
    const total = subtotal + iva; 

    console.log("Subtotal (sin IVA): $" + subtotal.Number(2)); 
    console.log("IVA (19%): $" + iva.Number(2)); 
    console.log("Total a pagar: $" + total.Number(2));
