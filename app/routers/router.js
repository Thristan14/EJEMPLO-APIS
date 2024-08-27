const express = require('express');
const router = express.Router();

const Book = require('../controllers/books.controller.js');
const Prestamo = require('../controllers/prestamo.controller.js');

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

module.exports = router;