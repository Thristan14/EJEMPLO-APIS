const db = require('../config/db.config.js');
const FacturaDetalle = db.FacturaDetalle;

// Crear un nuevo detalle de factura
exports.create = (req, res) => {
    let facturaDetalle = {};

    try {
        facturaDetalle.id_factura = req.body.id_factura;
        facturaDetalle.id_linea = req.body.id_linea;
        facturaDetalle.id_producto = req.body.id_producto;
        facturaDetalle.cantidad = req.body.cantidad;

        FacturaDetalle.create(facturaDetalle).then(result => {
            res.status(200).json({
                message: "Detalle de factura creado exitosamente con id_factura = " + result.id_factura + " y id_linea = " + result.id_linea,
                facturaDetalle: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Falló!",
            error: error.message
        });
    }
}

// Recuperar todos los detalles de factura
exports.findAll = (req, res) => {
    FacturaDetalle.findAll()
        .then(facturaDetalles => {
            res.status(200).json({
                message: "¡Información de todos los detalles de factura obtenida con éxito!",
                facturaDetalles: facturaDetalles
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Encontrar un detalle de factura por ID de factura y línea
exports.findById = (req, res) => {
    const { id_factura, id_linea } = req.params;
    FacturaDetalle.findOne({ where: { id_factura: id_factura, id_linea: id_linea } })
        .then(facturaDetalle => {
            if (facturaDetalle) {
                res.status(200).json({
                    message: "Detalle de factura recuperado exitosamente con id_factura = " + id_factura + " y id_linea = " + id_linea,
                    facturaDetalle: facturaDetalle
                });
            } else {
                res.status(404).json({
                    message: "Detalle de factura no encontrado con id_factura = " + id_factura + " y id_linea = " + id_linea
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Actualizar un detalle de factura por ID de factura y línea
exports.update = (req, res) => {
    const { id_factura, id_linea } = req.params;
    FacturaDetalle.update(req.body, { where: { id_factura: id_factura, id_linea: id_linea } })
        .then(([rowsUpdated]) => {
            if (rowsUpdated > 0) {
                res.status(200).json({
                    message: "Detalle de factura actualizado exitosamente con id_factura = " + id_factura + " y id_linea = " + id_linea
                });
            } else {
                res.status(404).json({
                    message: "Detalle de factura no encontrado para actualizar con id_factura = " + id_factura + " y id_linea = " + id_linea
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo actualizar el detalle de factura con id_factura = " + id_factura + " y id_linea = " + id_linea,
                error: error.message
            });
        });
}

// Eliminar un detalle de factura por ID de factura y línea
exports.delete = (req, res) => {
    const { id_factura, id_linea } = req.params;
    FacturaDetalle.destroy({ where: { id_factura: id_factura, id_linea: id_linea } })
        .then(rowsDeleted => {
            if (rowsDeleted > 0) {
                res.status(200).json({
                    message: "Detalle de factura eliminado exitosamente con id_factura = " + id_factura + " y id_linea = " + id_linea
                });
            } else {
                res.status(404).json({
                    message: "Detalle de factura no encontrado para eliminar con id_factura = " + id_factura + " y id_linea = " + id_linea
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo eliminar el detalle de factura con id_factura = " + id_factura + " y id_linea = " + id_linea,
                error: error.message
            });
        });
}
