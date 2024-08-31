const express = require('express');
const router = express.Router();

const Book = require('../controllers/books.controller.js');
const Prestamo = require('../controllers/prestamo.controller.js');
const Departamento = require('../controllers/departamento.controllers.js');
const Empleado = require('../controllers/empleado.controllers.js');
const Cliente = require('../controllers/cliente.controllers.js');

// Rutas para el controlador de Book
router.post('/api/books/create', Book.create);
router.get('/api/books/all', Book.findAll);
router.get('/api/books/onebyid/:id', Book.findById);
router.put('/api/books/update/:id', Book.update);
router.delete('/api/books/delete/:id', Book.delete);

// Rutas para el controlador de prestamo
router.post('/api/prestamos/create', Prestamo.create);
router.get('/api/prestamos/all', Prestamo.findAll);
router.get('/api/prestamos/onebyid/:id', Prestamo.findById);
router.put('/api/prestamos/update/:id', Prestamo.update);
router.delete('/api/prestamos/delete/:id', Prestamo.delete);

// Rutas para el controlador de prestamo
router.post('/api/departamento/create', Departamento.create);
router.get('/api/departamento/all', Departamento.findAll);
router.get('/api/departamento/onebyid/:id', Departamento.findById);
router.put('/api/departamento/update/:id', Departamento.update);
router.delete('/api/departamento/delete/:id', Departamento.delete);

// Rutas para el controlador de empleado
router.post('/api/empleado/create', Empleado.create);
router.get('/api/empleado/all', Empleado.findAll);
router.get('/api/empleado/onebyid/:id', Empleado.findById);
router.put('/api/empleado/update/:id', Empleado.update);
router.delete('/api/empleado/delete/:id', Empleado.delete);

// Rutas para el controlador de cliente
router.post('/api/cliente/create', Cliente.create);
router.get('/api/cliente/all', Cliente.findAll);
router.get('/api/cliente/onebyid/:id_cliente', Cliente.findById);
router.put('/api/cliente/update/:id_cliente', Cliente.update);
router.delete('/api/cliente/delete/:id_cliente', Cliente.delete);

module.exports = router;