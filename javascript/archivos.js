//--VARIABLES--//

/*let texto = "esta es una variable de texto";
let num1 = 5;
let boolean= true
alert(texto);
alert (num1);
alert (boolean);

var rancio = "pedro";
rancio= "carlos";
alert (rancio);

const ped = "Esto es una constante"; 
alert (ped);

let nombre = prompt("Dime tu nombre?");
alert ("Hola "+ nombre)*/

//--OPERADORES--//

//operadores de asignacion//
/*let numero = 5;
numero **= 2;
document.write (numero);*/

//operadores aritmeticos//
/*let numero1 = 10;
 let numero2= 5;
const resultado = numero1 % numero2;
alert (resultado);*/

//operadores de comparación//
/*let numero1= 23;
let numero2= 13;
const comparacion = numero1 !== numero2;
document.write(comparacion);*/

//operadores lógicos//
/*let valor1 = 10;
let valor2 = 5;
const resultado1 = valor1 < valor2 ; //false
const resultado2 = valor1 != valor2; // true
document.write(resultado1 && resultado2); // (false && true = false) (false || true =true) (!false= true)*/

//--CONCATENACIÓN--//
/*let nombre= "Oscar "; //string
let numero= 33;     //numérico                    
let numeroCompleto = "" + nombre + numero; //nombre.concat(numero);
document.write(numeroCompleto);*/

//--CONDICIONAL--//
/*let nombre = "Oscar"
let matematicas = 1.0;
let español = 3.5;
let ingles = 3.5;
let sistemas =4.5;

const promedio = (matematicas + español + ingles + sistemas)/4;

if (promedio >= 3){
    document.write(`Felicitaciones ${nombre}, aprobaste el año, tu nota promedio es de: `+ promedio);
} else {
    document.write(`${nombre}, Tienes que estudiar mas, reprobaste el año, tu nota promedio es de: `+ promedio);
}*/

/*let valor1 = 10;
let valor2 = 5;
let valor3 =20;
let valor4 = 20;

const resultado1 = valor1 == valor2 ; //false
const resultado2 = valor1 != valor2; // true
const resultado3 = valor3 == valor4 ; //true
const resultado4 = valor1 > valor3; // false

const op = (resultado1 || resultado2) && (resultado3 && resultado4); //false

if (!op == true){
    document.write("El resultado es verdadero");
} else {
    document.write("El resultado es falso");
}*/

/*let helado6= 2.9;
let helado7= 2.9;

const resultado6 = `Potecito de helado de confites, cuesta $${helado6}`
const resultado7 = `Pote de 1/4 kg -> cuesta $${helado7}`;

let nombre = prompt("Digite tu nombre");
let monto = prompt ("Digite el valor que tienes para comprar tu helado");

if (monto >= helado6 && helado7) { 
    alert(`Hola ${nombre} los helados mas caros son: 
    número 1. ${resultado6}
    número 2. ${resultado7}`);  
let comprar = prompt (`Cual deseas comprar, marca 1. o  2.`)

    if (comprar == 1){
        comprar = (monto - 2.9);
        alert(`Compraste ${resultado6} 
        sus vueltas son: `+ comprar ); 
        alert ("Gracias por la compra")  
    } else if (comprar == 2){
        comprar= (monto - 2.9);
        alert(`Compraste ${resultado7} 
        sus vueltas son: `+ comprar );
        alert ("Gracias por la compra")
    } else {
        alert ("No se ha comprado ningun helado");
    } 
  
} else {
    alert(`Hola ${nombre}, no te alcanza el dinero, los helados mas caros son: 
    número 1. ${resultado6} 
    número 2. ${resultado7}`);
}*/

/*let dineroCofla = prompt ("Cuanto dinero tienes Cofla?");
let dineroRoberto = prompt ("Cuanto dinero tienes Roberto?");
let dineroPedro = prompt ("Cuanto dinero tienes Pedro?");

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert ("Cofla, comprate el helado de agua");
    alert ("y te sobran: " + (dineroCofla-0.6));

} else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert ("Cofla,comprate el helado de crema");
    alert ("y te sobran: " + (dineroCofla-1));
}
 else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert ("Cofla,comprate el helado heladix");
    alert ("y te sobran: " + (dineroCofla-1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert ("Cofla,comprate el helado heladovich");
    alert ("y te sobran: " + (dineroCofla-1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert ("Cofla, comprate el helado helardo");
    alert ("y te sobran: " + (dineroCofla-1.8));
}
else if (dineroCofla >= 2.9) {
    alert ("Cofla, comprate el helado con confities o pote de helado de 1/4 kg")
    alert ("y te sobran: " + (dineroCofla-2.9));
}
else {
    alert ("Lo siento Cofla, no te alcanza para ningun helado");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert ("Roberto, comprate el helado de agua")

} else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert ("Roberto, comprate el helado de crema");
}
 else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert ("Roberto,comprate el helado heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert ("Roberto,comprate el helado heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto< 2.9){
    alert ("Roberto,comprate el helado helardo");
}
else if (dineroRoberto >= 2.9) {
    alert ("Roberto, comprate el helado con confities o pote de helado de 1/4 kg"); 
}
else {
    alert ("Lo siento Roberto, no te alcanza para ningun helado");
}

if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert ("Pedro, comprate el helado de agua");

} else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert ("Pedro, comprate el helado de crema");
}
 else if (dineroPedro >= 1.6 && dineroPedro <br 1.7){
    alert ("Pedro, comprate el helado heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro <br 1.8){
    alert ("Pedro, comprate el helado heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro <br 2.9){
    alert ("Pedro, comprate el helado helardo");
}
else if (dineroPedro >= 2.9) {
    alert ("Pedro, comprate el helado con confities o pote de helado de 1/4 kg"); 
}
else {
    alert ("Lo siento Pedro, no te alcanza para ningun helado");
}*/

//--Arrays--//

 /*let frutas = ["manzana","pera","mango"];

 alert(frutas [1]);*/

 //objeto y arrays asociativos//

/*let automovil ={
    modelo:"chevrolet",
    caballosDeFuerza:"100 HP",
    color:"azul",
    capacidad: 4 
};

let modelo = automovil["modelo"];
let capacidad = automovil["capacidad"]
let color = automovil ["color"]

let frase = `El modelo de mi automovil es: <b>${modelo}</b> <br></br>
             La capacidad de puestos que tiene mi automovil es de: <b>${capacidad} puestos</b> <br></br>
             El color de mi automovil es: <b>${color}</b> <br></br>`;

document.write(frase);
document.write(automovil["caballosDeFuerza"])*/

//--CICLOS--//

/*let numero = 0;

while (numero < 30){
    document.write(numero + "<br>");
    numero++ ;
    if (numero == 15){
        break;  
    }
}
document.write ("Fín de la secuencia");*/

/*let numero= 0;

do{
    
    document.write(numero + "<br>");
    numero++ ; 
   
} while (numero <= 20)*/

//--SWITCH--//

/*let numero = 4;

switch (numero){
    case 1:
            document.write("Este es el primer caso")
        break;

       case 2: 
            document.write("Este es el segundo caso")
        break;

        case 3:
            document.write("Este es el tercer caso")
        break;

        default:
            document.write("No se encontro el caso")
        break;
}*/
//FOR//

/*for (let i= 0; i < 10; i++) {

    if (i == 6){
        continue;
    }
    document.write(i + "<br>");
    
}*/

/*let animales = ["Perro", "gato", "pollo"];

for (let animal in animales){
    document.write(animal + "<br>");
}

document.write("<br>");

for (let animal of animales){
    document.write(animal  + "<br>");
}*/

//--FUNCIONES--//

/*function saludar () {
    let saludo = prompt ("Hola oscar como estas?");

    if (saludo == "bien") {
        document.write ("Me alegro" + "<br>");
    } else {
        document.write ("Una pena" + "<br>" );
    }
}

saludar ();
saludar ();*/

/*function suma (num1,num2) {
    let resul = (num1+num2);
    document.write(resul)
}

suma (10, 2)*/

/*function suma (num1,num2){
    let resul = (num1 **= num2);
    return resul;
}

let resultado = suma (10, 2);
document.write(resultado);*/

/*function saludar (nombre) {
    let frase = `Hola ${nombre} como estas, como te ha ido?`;
    return (frase);
}

let resultado = saludar ("Oscar");
document.write(resultado);*/

/*let animales = ["perro","gato","pajaro"]
 
const ani = (animal) => {
 return [animales[animal],animal] 
}
 document.write (ani([0],[1]))*/


/*const saludar = nombre =>  document .write (`Hola ${nombre}, como estas, como te ha ido?`);

saludar("Oscar");*/

/*const Nombres = (nombre1, nombre2) => {
    let nombres = (nombre1 + nombre2)
    document.write(nombres)
}

Nombres ("Oscar","Pedro")*/

/*const numeros = (num1,num2,num3) => {
    let numero = (num1+num2)/num3;
    document.write(numero);
}

numeros(10,20,3);*/

/*let free = false;

const fiesta = (time) => {

    let edad = prompt (`Bienvenido a la fiesta, cuantos años tienes?`);

    if (edad >= 18){
        if (time >= 2 && time < 7 && free == false){
            alert ("Puedes pasar gratis a la fiesta porque eres la primer persona despues de las 2am");
            free= true;
        } else {
            alert (`Son las ${time}:00Hs, tienes que pagar la entrada a la fiesta`)
        } 
        
    } else {
        alert ("No eres mayor de edad, no puedes pasar a la fiesta");
    }  
}   

fiesta (9);
fiesta (10);
fiesta (11);
fiesta (12);
fiesta (1);
fiesta (2);
fiesta (2.4);
fiesta (3);*/

/*let cantidad = prompt ("Cuantos alumnos son?")
let alumnosTotales= [];

for (let i = 0; i < cantidad; i++){
alumnosTotales [i] = [prompt("nombre del alumno " + (i + 1)),0];
}

const tomarAsistencia = (nombre,p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (let i=0; i < 30; i++) {
    for (let alumno in alumnosTotales){
      tomarAsistencia (alumnosTotales[alumno][0],alumno);
    }
}

for (let alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ___________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    ___________Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>
    `;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= `<b id ="col">REPROBADO POR INASISTENCIAS</b> <br></br>`;
    } else {
    resultado+= `<br></br>`
    }
    document.write(resultado);
}*/


/*let operacion = prompt (`Digite que operacion matemática desea realizar:
 1.suma
 2.resta 
 3.multiplicación 
 4.division 
 5.potencia 
 6.raiz cuadrada 
 7.raiz cubica`)

if (operacion == 1){
    let numero1 = prompt ("Digite un numero?");
    let numero2 = prompt ("Digite un segundo numero");
    const resultado = parseInt (numero1) + parseInt (numero2);
     alert (`El resultado de la suma de los dos valores es: ` +resultado)    
}else if (operacion == 2) {
    let numero1 = prompt ("Digite un numero?");
    let numero2 = prompt ("Digite un segundo numero");
    const resultado = parseInt (numero1) - parseInt (numero2);
     alert (`El resultado de la resta de los dos valores es: ` +resultado)
}else if (operacion == 3) {
    let numero1 = prompt ("Digite un numero?");
    let numero2 = prompt ("Digite un segundo numero");
    const resultado = parseInt (numero1) * parseInt (numero2);
     alert (`El resultado de la multiplicación de los dos valores es: `+resultado)
}else if (operacion == 4) {
    let numero1 = prompt ("Digite un numero?");
    let numero2 = prompt ("Digite un segundo numero");
    const resultado = parseInt (numero1) / parseInt (numero2);
     alert (`El resultado de la división de los dos valores es: `+ resultado)
}else if (operacion == 5) {
    let numero1 = prompt ("Digite un numero");
    let numero2 = prompt ("Digite cuantas veces desea que el numero se eleve para saber su potencia");
    const resultado = parseInt (numero1) ** parseInt (numero2);
     alert (`El resultado de la potencia del valor digitado es: ` +resultado)
}else if (operacion == 6) {
    let numero1 = prompt ("Digite un numero?");
    const resultado = Math.sqrt (numero1) ;
     alert (`La raiz cuadrada del numero digitado es: ` +resultado)
}else if (operacion == 7) {
    let numero1 = prompt ("Digite un numero?");
    
    const resultado = Math.cbrt (numero1)
    alert (`La raiz cubica del numero digitado es: ` +resultado)
}
else {
    alert ("El numero digitado no se encuentra en las cuatro operaciones para realizar")
}*/

//--POO--//

/*class Animal {
    constructor(especie,edad,color){
        this.especie = especie
        this.edad = edad
        this.color = color
        this.ref = `Soy un ${this.especie}, tengo ${this.edad} meses de edad 
        y soy de color ${this.color}`;
    }

   verInfo() {
   document.write(this.ref + "<br>") 
}

}

class Perro extends Animal {
 constructor (especie,edad,color) {
    super(especie,edad,color)
    this.raza = null;
 }

  set setRaza(newName) { //Modifica el valor//
     this.raza = newName
 }
 
  get getRaza(){
      return (this.raza) //Obtiene el valor//
  }
  
}

const perro = new Perro("Perro",5,"blanco");
const gato = new Animal("Gato",5,"blanco");
const pajaro = new Animal("Canario",4,"amarillo");
//document.write(perro.ref + "<br>"); 
//document.write(gato.ref + "<br>");
//document.write(pajaro.ref + "<br>");
perro.setRaza = "Doberman";
document.write(perro.getRaza + "<br>");
gato.verInfo();
pajaro.verInfo();*/


/*class Celulares {
    constructor (nombre,color,peso,resolucionDePantalla,resolucionDeCamara,memoriaRam) {
    this.nombre = nombre    
    this.color = color
    this.peso = peso
    this.resolucionDePantalla = resolucionDePantalla
    this.resolucionDeCamara = resolucionDeCamara
    this.memoriaRam = memoriaRam
    this.ref= `Celular <b>${this.nombre}:</b> <br>
    <b>Color:</b> ${this.color}, <br>
    <b>Peso:</b> ${this.peso}gramos, <br>
    <b>Resolución de Pantalla:</b> ${this.resolucionDePantalla} pulgadas, <br>
    <b>Resolución de camara:</b> ${this.resolucionDeCamara}, <br>
    <b>Memoria Ram:</b> ${memoriaRam}GB. <br> `;
    }

    verInfo() {
        document.write (this.ref + "<br>");
    }

    operacion1() {
       const numero = prompt(`Digite el numero de la actividad que desea realizar con su celular Nokia:
        1.Encender 2.Reiniciar 3.Apagar 4.Tomar Fotos 5.Grabar`)
    
        if (numero == 1){
            document.write(`Actividad: <b>Encendido</b> <br>`)  
        }else if (numero == 2){
            document.write(`Actividad: <b>Reiniciando</b> <br>`)  
        }else if (numero == 3){
            document.write(`Actividad: <b>Apagando</b> <br>`)
        }else if (numero == 4){
            document.write(`Actividad: <b>Tomar fotos</b> <br>`)
        }else if (numero == 5){
            document.write(`Actividad: <b>Grabar con el celular</b> <br>`)
        }
        else {
            document.write(`Actividad: <b>No has asignado ninguna de las actividades con el celular</b> <br>`)    
        }
        
    } 

    operacion2() {
        const numero = prompt(`Digite el numero de la actividad que desea realizar con su celular Motorola:
         1.Encender 2.Reiniciar 3.Apagar 4.Tomar Fotos 5.Grabar`)
     
         if (numero == 1){
             document.write(`Actividad: <b>Encendido</b> <br>`)  
         }else if (numero == 2){
             document.write(`Actividad: <b>Reiniciando</b> <br>`)  
         }else if (numero == 3){
             document.write(`Actividad: <b>Apagando</b> <br>`)
         }else if (numero == 4){
             document.write(`Actividad: <b>Tomar fotos</b> <br>`)
         }else if (numero == 5){
             document.write(`Actividad: <b>Grabar con el celular</b> <br>`)
         }
         else {
             document.write(`Actividad: <b>No has asignado ninguna de las actividades con el celular</b> <br>`)    
         }
         
     } 

     operacion3() {
        const numero = prompt(`Digite el numero de la actividad que desea realizar con su celular Samnsung Galaxy:
         1.Encender 2.Reiniciar 3.Apagar 4.Tomar Fotos 5.Grabar`)
     
         if (numero == 1){
             document.write(`Actividad: <b>Encendido</b> <br>`)  
         }else if (numero == 2){
             document.write(`Actividad: <b>Reiniciando</b> <br>`)  
         }else if (numero == 3){
             document.write(`Actividad: <b>Apagando</b> <br>`)
         }else if (numero == 4){
             document.write(`Actividad: <b>Tomar fotos</b> <br>`)
         }else if (numero == 5){
             document.write(`Actividad: <b>Grabar con el celular</b> <br>`)
         }
         else {
             document.write(`Actividad: <b>No has asignado ninguna de las actividades con el celular</b> <br>`)    
         }
         
     } 
}


class Nokia extends Celulares {
    constructor(nombre, color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam){
        super(nombre,color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam)
    }
}

class Motorola extends Celulares {
    constructor(nombre, color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam){
        super(nombre,color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam)
    }
}

class Samnsung extends Celulares {
    constructor(nombre,color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam){
        super(nombre,color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam)
    }
}

const cel1 = new Nokia ("Nokia", "Rojo", 113.398,6.5, "HD", 4);
const cel2 = new Motorola("Motorola","Negro", 120.283,7.2, "HD", 4);
const cel3 = new Samnsung("Samnsung Galaxy","Blanco", 110.298,5.9, "HD", 3);

cel1.verInfo(cel1.operacion1());

cel2.verInfo(cel2.operacion2());

cel3.verInfo(cel3.operacion3());*/

//METODOS DE CADENAS//

/*let cadena = "Esto es una cadena"

const resultado = (cadena.concat(" y este es el testo agregado"))

document.write(resultado);*/

/*let cadena = "el perro es de color blanco"
let resultado = cadena.substring(0, 8) //elimina los elementos que no este en la posicion desde el 0 al 8
document.write (resultado);*/

/*let cadena = 50;
let resultado = cadena.toString();
document.write (resultado + 2);*/

/*let cadena = 50;
let resultado = cadena.valueOf();
document.write (resultado + 2);*/

/*let animales = "el perro es de color blanco ";
let animales2 = "o"
 
const resultado = animales.lastIndexOf(animales2) //la posicion de el ultimo caracter que contega "o" en la cadena

document.write (resultado);*/

/*let cadena = "estatico"
let cadena2 = "ico"

const resultado = cadena.endsWith(cadena2)

document.write(resultado);*/

//--METODOS DE ARRAY--//

/*let nombres = ["Andres", "Carlos", "Pedro"];

document.write(nombres + "<br>"); 

nombres.shift();

document.write(nombres);*/

/*let numeros = [3,4,5];

 numeros. unshift(1,2);

document.write(numeros);*/

/*let animales = ["perro", "gato", "conejo"];

animales.pop() + "<br>"

document.write (animales)*/


/*let nombres = ["Carlos","Sandra","Davinchi","Romualdo"];

const resultado = nombres.filter (numero => numero.length > 7)

document.write(resultado)*/

/*let animales = ["perro", "gato", "conejo"];
 
const resultado = animales.splice(0,2) 

document.write (resultado);*/

/*let animales = ["perro", "gato", "conejo"];
 
const resultado = animales.slice(0,-1) //elimina el ultimo elemento parecido a substring

document.write (resultado);*/

/*const obtenerInformacion = (materia) => {
 let materias = {
    fisica:["Perez","Pedro","Pepito","Cofla","María"],
    programacion:["Dalto","Pedro","Juan","Pepito"],
    logica:["Hernandez","Pedro","Juan","Pepito","Cofla","María"],
    quimica:["Rodriguez","Pedro","Juan","Pepito","Cofla","María"]
    }
    if(materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    }else {
        return materias;
    }
}

const mostrarInformacion = (materia) => {
 let informacion = obtenerInformacion (materia)
 
    if (informacion !== false) {
        let profesor = informacion [0][0];
        let alumnos = informacion [0];
        alumnos.shift();
        document.write (`El profesor de <b>${informacion[1]}</b> es: <b style= "color:red"> ${profesor}</b><br> 
        Los alumnos son: <b style= "color:blue">${alumnos}</b> <br><br>`);
    } 
 }

 const cantidadDeClases = (alumno) => {
     let informacion = obtenerInformacion()
     let clasesPresentes = [];
     let cantidadTotal = 0;
        for (let info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    } 
    return `<b style= "color:blue">${alumno}</b> esta en <b>${cantidadTotal}</b> clases: <b style= "color:green"> ${clasesPresentes}</b> <br><br>`;
 }


mostrarInformacion ("fisica");
mostrarInformacion ("programacion");
mostrarInformacion ("logica");
mostrarInformacion ("quimica");
 
document.write(cantidadDeClases("Cofla"))
document.write(cantidadDeClases("Pepito"))*/

/*const inscripcion = (materia)=>{
 let materias = {
     fisica: 15,
     matematicas: 10,
     filosofia: 25,
     ingles: 30
    }
    
    return [materias[materia],materia]  
       
}

const obtenerInformacion = (materia)=> {
    let resultado = inscripcion (materia)[0]
    let resultado2 = inscripcion (materia)[1]
    let añadir = []
    let pregunta= prompt(`Digita las materias que vas a inscribir?`)
    
    if (resultado >= 20 && pregunta == resultado2) {
        document.write(`No te puedes inscribir, hay ${resultado} alumnos inscritos en ${resultado2} <br><br>`)
    }else if (resultado < 20) {
        let resul= resultado++
        añadir.push(resul)
         document.write(`Tu inscripcion fue todo un exito, contigo somos ${resultado} alumnos inscritos en ${resultado2} <br><br> `) 
    }else {
        document.write(`No se encuentra la materia <br><br>`)
    }
     
}

obtenerInformacion ("fisica");
obtenerInformacion ("filosofia");
obtenerInformacion ("matematicas");
obtenerInformacion ("ingles");*/

//----DOM----//

// Metodos de selección de elementos //

/*let parrafo = document.getElementById("parrafo");

document.write(parrafo)*/

/*let parrafo = document.getElementsByTagName("p");

document.write(parrafo [0]);*/
/*let parrafo = document.querySelector("#parrafo");

document.write(parrafo);*/

/*let uno = document.querySelectorAll(".uno");
document.write(uno [0]);*/

// Metodos para definir, obtener, eliminar atributos //

/*const rangoEtario = document.querySelector(".rangoEtario");

rangoEtario.setAttribute("type","number");*/

/*const rangoEtario = document.querySelector(".rangoEtario");

document.write(rangoEtario.getAttribute("type"));*/

/*const rangoEtario = document.querySelector(".rangoEtario");

document.write (rangoEtario.removeAttribute("type"));*/

//atributos globales//

/*const uno = document.querySelector(".uno");
uno.setAttribute("contentEditable","true")*/

/*const uno = document.querySelector(".uno"); // Selecciona el título y lo encierra en un rectangulo, hace focus
uno.setAttribute("tabindex","0")*/

// atributos en input //

/*const input = document.querySelector(".rangoEtario");

input.required = " ";*/

/*const input = document.querySelector(".rangoEtario"); // la minima de caracteres que debe tener un input "minLenght mayus"

input.minLength = 4;*/

/*const input = document.querySelector(".input-normal");

input.accept = "image/png";*/

/*const input = document.querySelector(".input-normal");

input.type = "range";*/

// atributos en style //

/*/const uno = document.querySelector(".uno");
uno.style = "padding: 50px"
uno.style = "background-color: #48e"*/

//metodos de classList//

/*const uno = document.querySelector(".uno");
 uno.classList.add("nueva");*/

 /*const dos = document.querySelector(".dos") //nos muestra el valor de la clase - clase 3
 let valor = dos.classList.item(3);
 document.write(valor);*/

//obtencion y modificacion de elementos//

/*const dos = document.querySelector(".dos") // muestra el contenido del texto "texto de prueba"
let mostrar = dos.textContent;
document.write(mostrar);*/

/*const dos = document.querySelector(".dos"); // muestra el html del texto "Texto de prueba <b>prueba</b>"
let mostrar = dos.innerHTML;
alert (mostrar);*/

/*const dos = document.querySelector(".dos");  // muestra todo el contenido html completo del elemento
let mostrar = dos.outerHTML;
alert(mostrar);*/

//Creacion de elementos//

/*const contenedor = document.querySelector(".contenedor")
const item = document.createElement("LI"); //creamos elemento <li></li>
const textItem = document.createTextNode("Este es un item de la lista"); //creamos un texto 
item.appendChild(textItem); // nos muestra el hijo dentro de li <li>este es un item de la lista</li>
//item.innerHTML=textItem; // nos muestra el contenido del texto dentro del li <li>[object text]</li>
contenedor.appendChild(item)
console.log(item)*/
 




