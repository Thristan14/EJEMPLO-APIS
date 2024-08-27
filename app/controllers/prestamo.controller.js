const db = require('../config/db.config.js');
const Prestamo = db.Prestamo;

// Crear un nuevo libro
exports.create = (req, res) => {
    let prestamo = {};

    try {
        prestamo.codlibro = req.body.codlibro;
        prestamo.codusuario = req.body.codusuario;
        prestamo.fechasalida = req.body.fechasalida;
        prestamo.fechamaxima = req.body.fechamaxima;
        prestamo.fechadevolucion = req.body.fechadevolucion; 
        
        Prestamo.create(prestamo).then(result => {
            res.status(200).json({
                message: "Uploaded successfully a prestamo with id = " + result.id,
                prestamo: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los prestamo
exports.findAll = (req, res) => {
    Prestamo.findAll()
        .then(prestamos => {
            res.status(200).json({
                message: "Get all books' Infos Successfully!",
                prestamos: prestamos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un prestamo por Id
exports.findById = (req, res) => {
    Prestamo.findByPk(req.params.id)
        .then(prestamo => {
            res.status(200).json({
                message: "Successfully retrieved a prestamo with id = " + req.params.id,
                prestamo: prestamo
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar un libro por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Prestamo.update(req.body, { where: { id: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully a prestamo with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a prestamo with id = " + id,
                error: error.message
            });
        });
}

// Eliminar un prestamo por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Prestamo.destroy({ where: { id: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully a prestamo with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a prestamo with id = " + id,
                error: error.message
            });
        });
}