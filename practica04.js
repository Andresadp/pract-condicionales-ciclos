let cantidad = prompt("Ingrese la cantidad de huevos a llevar");
let valorUnitario , precioNeto , precioDescuento;

valorUnitario = 250
precioNeto = (Number(valorUnitario) * Number(cantidad));

if(cantidad >0 && cantidad <= 100) {
    precioDescuento = (Number(precioNeto) - Number(precioNeto*(3/100) ))
    console.log("Tiene 3% de descuento");
    
} else if(cantidad >100 && cantidad <= 200) {
    precioDescuento = (Number(precioNeto) - Number(precioNeto*(5/100) ))
    console.log("Tiene 5% de descuento");

}else if(cantidad >200 && cantidad <= 300) {
    precioDescuento = (Number(precioNeto) - Number(precioNeto*(8/100) ))
    console.log("Tiene 8% de descuento");

}else if(cantidad >300) {
    precioDescuento = (Number(precioNeto) - Number(precioNeto*(10/100) ))
    console.log("Tiene 10% de descuento");

}else{
    precioDescuento = 0
    console.log("No tiene ningún descuento" )
}


console.log("El precio neto es: " + precioNeto)
console.log("El precio final con descuento es: " + precioDescuento)
