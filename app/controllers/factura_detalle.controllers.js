const db = require('../config/db.config.js');
const Factura_detalle = db.Factura_detalle;

// Crear un nuevo detalle de factura
exports.create = (req, res) => {
    let factura_detalle = {};

    try {
        factura_detalle.id_factura = req.body.id_factura;
        factura_detalle.id_linea = req.body.id_linea;
        factura_detalle.id_producto = req.body.id_producto;
        factura_detalle.cantidad = req.body.cantidad;

        Factura_detalle.create(factura_detalle).then(result => {
            res.status(200).json({
                message: "Uploaded successfully a factura_detalle with id_factura = " + result.id_factura + " and id_linea = " + result.id_linea,
                factura_detalle: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los detalles de factura
exports.findAll = (req, res) => {
    Factura_detalle.findAll()
        .then(factura_detalles => {
            res.status(200).json({
                message: "Get all factura_detalles' Infos Successfully!",
                factura_detalles: factura_detalles
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un detalle de factura por Id
exports.findById = (req, res) => {
    Factura_detalle.findOne({
        where: {
            id_factura: req.params.id_factura,
            id_linea: req.params.id_linea
        }
    })
    .then(factura_detalle => {
        res.status(200).json({
            message: "Successfully retrieved a factura_detalle with id_factura = " + req.params.id_factura + " and id_linea = " + req.params.id_linea,
            factura_detalle: factura_detalle
        });
    })
    .catch(error => {
        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
}

// Actualizar un detalle de factura por Id
exports.update = (req, res) => {
    Factura_detalle.update(req.body, {
        where: {
            id_factura: req.params.id_factura,
            id_linea: req.params.id_linea
        }
    })
    .then(() => {
        res.status(200).json({
            message: "Updated successfully a factura_detalle with id_factura = " + req.params.id_factura + " and id_linea = " + req.params.id_linea
        });
    })
    .catch(error => {
        res.status(500).json({
            message: "Error -> Cannot update a factura_detalle with id_factura = " + req.params.id_factura + " and id_linea = " + req.params.id_linea,
            error: error.message
        });
    });
}

// Eliminar un detalle de factura por Id
exports.delete = (req, res) => {
    Factura_detalle.destroy({
        where: {
            id_factura: req.params.id_factura,
            id_linea: req.params.id_linea
        }
    })
    .then(() => {
        res.status(200).json({
            message: "Deleted successfully a factura_detalle with id_factura = " + req.params.id_factura + " and id_linea = " + req.params.id_linea
        });
    })
    .catch(error => {
        res.status(500).json({
            message: "Error -> Cannot delete a factura_detalle with id_factura = " + req.params.id_factura + " and id_linea = " + req.params.id_linea,
            error: error.message
        });
    });
}