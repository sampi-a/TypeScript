import { Persona } from './persona/persona';

const persona1 = new Persona('Juan', 'García Pérez', 30, '12345678A', new Date(1992, 5, 15), 'Rojo', 'Hombre');
persona1.direcciones.push(new Direccion('Calle Mayor', 1, '28001', 'Madrid', 'Madrid'));
persona1.mails.push(new Mail('Personal', 'juan.garcia@gmail.com'));
persona1.telefonos.push(new Telefono('Móvil', '612345678'));

const persona2 = new Persona('María', 'López Ruiz', 25, '23456789B', new Date(1996, 7, 23), 'Azul', 'Mujer');
persona2.direcciones.push(new Direccion('Calle Alcalá', 2, '28002', 'Madrid', 'Madrid'));
persona2.mails.push(new Mail('Trabajo', 'maria.lopez@empresa.com'));
persona2.telefonos.push(new Telefono('Trabajo', '912345678'));

const persona3 = new Persona('Pablo', 'González Martínez', 40, '34567890C', new Date(1981, 10, 7), 'Verde', 'Hombre');
persona3.direcciones.push(new Direccion('Calle Gran Vía', 3, '28003', 'Madrid', 'Madrid'));
persona3.mails.push(new Mail('Personal', 'pablo.gonzalez@yahoo.com'));
persona3.telefonos.push(new Telefono('Móvil', '623456789'));

// Buscamos la persona con DNI '12345678A'
const personaModificada = Persona.buscarPorDni('12345678A');

// Añadimos una nueva dirección
personaModificada?.agregarDireccion(new Direccion('Calle Atocha', 4, '28004', 'Madrid', 'Madrid'));

// Añadimos un nuevo mail
personaModificada?.agregarMail(new Mail('Trabajo', 'juan.garcia@empresa.com'));

// Añadimos un nuevo teléfono
personaModificada?.agregarTelefono(new Telefono('Casa', '912345678'));

console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(personaModificada);
