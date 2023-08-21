let producto = prompt("Ingrese el tipo de producto comprado (carro, moto, bicicleta, patineta, scooter eléctrico):").toLowerCase(); 
let descuento = 0; if (producto === "carro" || producto === "moto") { descuento = 0.15; }
 else if
  (producto === "bicicleta" || producto === "patineta") { descuento = 0.1; } 
  else if
   (producto === "scooter eléctrico") { descuento = 0.05; } 
   else { 
    console.log("Producto no reconocido. No se aplicará descuento."); } 
    if (descuento > 0)
 { console.log("El descuento aplicado es del " + (descuento * 100) + "%."); }
