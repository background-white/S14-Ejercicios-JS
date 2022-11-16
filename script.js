
//ejercicio 1
let cantidadV=+prompt("Ingresa la cantidad de varones");

let cantidadM=+prompt("Ingresa la cantidad de mujeres");

let cantidadT=cantidadV+cantidadM;

alert(`El porcentaje de varones es de ${100*cantidadV/cantidadT}%`);

alert(`El porcentaje de mujeres es de ${100*cantidadM/cantidadT}%`);


//ejercicio 2
let reparacionPistas=+prompt("Ingresa la cantidad total de las reparaciones ");

let fraccionTotal=reparacionPistas/100;
document.write(fraccionTotal);

document.write(`La Avenida La Mar le toca ${fraccionTotal*35} soles <br>`);

document.write(`La Avenida Abancay le toca ${fraccionTotal*25} soles <br>`);

document.write(`La Avenida 28 de Julio le toca ${fraccionTotal*10} soles <br>`);

document.write(`La Avenida Aviación le toca ${fraccionTotal*15} soles <br>`);

document.write(`La Avenida Tacna le toca ${fraccionTotal*15} soles <br>`);


//ejercicio 3

let entradaG=+prompt("¿Cuanto se vendio para el publico general?");

let entrada65=+prompt("¿Cuanto se vendio para mayore de 65?");
 
let entradaM=+prompt("¿Cuanto se vendio para menores de edad?")

entradaGeneral=150;
entradaMayores65=50;
entradaMenores=80;

document.write(`Se vendieron ${entradaG} de las entradas generales, a un total de ${entradaG*entradaGeneral} <br>`);

document.write(`Se vendieron ${entrada65} de las entradas para mayores de 65 años, a un total de ${entrada65*entradaMayores65} <br>`);

document.write(`Se vendieron ${entradaM} de las entradas para menores de edad, a un total de ${entradaM*entradaMenores} <br>`);