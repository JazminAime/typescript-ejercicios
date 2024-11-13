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

// Ejercicio 8: Catálogo de Productos - forEach
// Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
// Usar forEach para imprimir el nombre y el precio de cada producto.

interface Producto2 {
  nombre: string;
  precio: number;
}

const catalogo: Producto2[] = [
  { nombre: "Producto A", precio: 30 },
  { nombre: "Producto B", precio: 50 },
  { nombre: "Producto C", precio: 70 },
];

catalogo.forEach((producto) => {
  console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
});

// Ejercicio 9: Catálogo de Productos - filter
// Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50.

const productosBaratos = catalogo.filter((producto) => producto.precio < 50);
console.log(productosBaratos);

// Ejercicio 10: Actualización de Inventario - map
// Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio.

const catalogoConDescuento = catalogo.map((producto) => ({
  nombre: producto.nombre,
  precio: producto.precio * 0.9,
}));

console.log(catalogoConDescuento);

// Ejercicio 11: Búsqueda de Usuario - find
// Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
// Usar find para buscar el usuario con el id 3.
// Imprimir en la consola el objeto del usuario encontrado.

interface Usuarios {
  id: number;
  nombre: string;
  activo: boolean;
}

const usuarios: Usuarios[] = [
  { id: 1, nombre: "Juan", activo: true },
  { id: 2, nombre: "Maria", activo: true },
  { id: 3, nombre: "Pedro", activo: false },
];

const encontrarUsuario = usuarios.find((usuario) => usuario.id === 3);
console.log(encontrarUsuario);

// Ejercicio 12: Contador de Usuarios Activos - filter y length
// Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
// Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola.

const usuariosActivos = usuarios.filter((usuario) => usuario.activo);
console.log(`Usuarios activos: ${usuariosActivos.length}`);

// Ejercicio 13: Actualización de Estado de Usuarios
// Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
// Imprimir el array usuarios para verificar que todos los usuarios están inactivos.

usuarios.forEach((usuario) => (usuario.activo = false));
console.log(usuarios);

// Ejercicio 14: Formateo de Productos para Mostrar - map
// Usar el array catalogo.
// Utilizar map para crear un nuevo array productosFormato que contenga
// el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
// Para esto podemos usar template strings `string text ${expression} string text`
// Imprimir el array productosFormato en la consola.

const productosFormato = catalogo.map(
  (producto) => `Producto: ${producto.nombre}, Precio: $${producto.precio}`
);

console.log(productosFormato);

// Ejercicio 15:
// Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:

interface User {
  name: string;
  age: number;
  occupation: string;
}

const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);

// Ejercicio 16:
// Vamos a volver a usar la interfaz User del ejercicio anterior.
// Crear una nueva interfaz Admin segun los datos que tenemos.
// Corregir el type Person para que acepte dos tipos: User y la nueva interfaz.
// Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores.

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

function logPerson2(person: Person) {
  console.log(` - ${person.name}, ${person.age}`);
  if ("occupation" in person) {
    console.log(` Occupation: ${person.occupation}`);
  } else if ("role" in person) {
    console.log(`Role: ${person.role}`);
  }
}

console.log("Persons:");
persons.forEach(logPerson2);
