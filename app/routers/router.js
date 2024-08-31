const express = require('express');
const router = express.Router();

const Book = require('../controllers/books.controller.js');
const Prestamo = require('../controllers/prestamo.controller.js');
const Departamento = require('../controllers/departamento.controllers.js');
const Empleado = require('../controllers/empleado.controllers.js');
const Cliente = require('../controllers/cliente.controllers.js');
const Proveedor = require('../controllers/proveedor.controllers.js');
const Producto = require('../controllers/producto.controllers.js');
const Factura = require('../controllers/factura.controllers.js');

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

// Rutas para el controlador de proveedor
router.post('/api/proveedor/create', Proveedor.create);
router.get('/api/proveedor/all', Proveedor.findAll);
router.get('/api/proveedor/onebyid/:id', Proveedor.findById);
router.put('/api/proveedor/update/:id', Proveedor.update);
router.delete('/api/proveedor/delete/:id', Proveedor.delete);

// Rutas para el controlador de producto
router.post('/api/producto/create', Producto.create);
router.get('/api/producto/all', Producto.findAll);
router.get('/api/producto/onebyid/:id', Producto.findById);
router.put('/api/producto/update/:id', Producto.update);
router.delete('/api/producto/delete/:id', Producto.delete);

// Rutas para el controlador de factura
router.post('/api/factura/create', Factura.create);
router.get('/api/factura/all', Factura.findAll);
router.get('/api/factura/onebyid/:id_factura', Factura.findById);
router.put('/api/factura/update/:id_factura', Factura.update);
router.delete('/api/factura/delete/:id_factura', Factura.delete);

module.exports = router;