// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()

let nombre: string = "Sala 2";
let edad: number = 22;
let esEstudiante: boolean = true;

console.log("Nombre: ", nombre);
console.log("Edad: ", edad);
console.log("Es estudiante: ", esEstudiante);

// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
// Realizar otra función que reste dos números.
// Realizar otra función que multiplique dos números.

function sumar(a: number, b: number): number {
  return a + b;
}

console.log("Suma:", sumar(4, 5));

function restar(a: number, b: number): number {
  return a - b;
}

console.log("Resta:", restar(8, 2));

function multiplicar(a: number, b: number): number {
  return a * b;
}

console.log("Multiplicación:", multiplicar(8, 2));

// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())

let numeros: number[] = [1, 2, 3, 4, 5];
numeros.forEach((num) => console.log(num * 2));

// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola

interface Persona {
  nombre: string;
  edad: number;
  esEstudiante: boolean;
}

let persona1: Persona = {
  nombre: "Juan",
  edad: 25,
  esEstudiante: false,
};

let persona2: Persona = {
  nombre: "Lucia",
  edad: 22,
  esEstudiante: true,
};

let persona3: Persona = {
  nombre: "Enzo",
  edad: 24,
  esEstudiante: false,
};

console.log(persona1, persona2, persona3);

// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos

let variable: string | number;
variable = "Hola Mundo";
console.log("Variable como string: ", variable);

variable = 11;
console.log("Variable como number: ", variable);

// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock).
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock).
// Se puede usar método filter() para esto

interface Producto {
  nombre: string;
  precio: number;
  enStock: boolean;
}

const productos: Producto[] = [
  {
    nombre: "Producto 1",
    precio: 1500,
    enStock: false,
  },
  {
    nombre: "Producto 2",
    precio: 3000,
    enStock: true,
  },
  {
    nombre: "Producto 3",
    precio: 6580,
    enStock: false,
  },
  {
    nombre: "Producto 4",
    precio: 8999,
    enStock: true,
  },
  {
    nombre: "Producto 5",
    precio: 11896,
    enStock: true,
  },
  {
    nombre: "Producto 6",
    precio: 8000,
    enStock: true,
  },
];

const productosEnStock = (productos: Producto[]): Producto[] =>
  productos.filter((producto) => producto.enStock);

console.log("Productos en stock: ", productosEnStock(productos));

const productoSinStock = (productos: Producto[]): Producto[] =>
  productos.filter((producto) => !producto.enStock);

console.log("Productos fuera de stock: ", productoSinStock(productos));

// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado).
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido).
// Se puede usar método filter() para esto

interface Cliente {
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;
}

let clientes: Cliente[] = [
  {
    nombre: "Lucas",
    edad: 55,
    email: "lucas@gmail.com",
    activo: true,
  },
  {
    nombre: "Maria",
    edad: 33,
    email: "maria@gmail.com",
    activo: true,
  },
  {
    nombre: "Juana",
    edad: 48,
    email: "juana@gmail.com",
    activo: false,
  },
  {
    nombre: "Franco",
    edad: 28,
    email: "franco@gmail.com",
    activo: false,
  },
  {
    nombre: "Patricia",
    edad: 44,
    email: "patricia@gmail.com",
    activo: false,
  },
  {
    nombre: "Maico",
    edad: 22,
    email: "maico@gmail.com",
    activo: true,
  },
];

const clientesActivos = (clientes: Cliente[]): Cliente[] =>
  clientes.filter((cliente) => cliente.activo);

console.log("Clientes activos:", clientesActivos(clientes));

const clientesInactivos = (clientes: Cliente[]): Cliente[] =>
  clientes.filter((cliente) => !cliente.activo);

console.log("Clientes inactivos: ", clientesInactivos(clientes));
