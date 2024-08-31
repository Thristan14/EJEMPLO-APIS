const db = require('../config/db.config.js');
const Factura = db.Factura;

// Crear una nueva factura
exports.create = (req, res) => {
    let factura = {};

    try {
        factura.id_factura = req.body.id_factura;
        factura.no_fact = req.body.no_fact;
        factura.serie = req.body.serie;
        factura.id_cliente = req.body.id_cliente;
        factura.id_empleado = req.body.id_empleado;
        factura.fecha_fac = req.body.fecha_fac;

        Factura.create(factura).then(result => {
            res.status(200).json({
                message: "Factura creada exitosamente con id = " + result.id_factura,
                factura: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Falló!",
            error: error.message
        });
    }
}

// Recuperar todas las facturas
exports.findAll = (req, res) => {
    Factura.findAll()
        .then(facturas => {
            res.status(200).json({
                message: "¡Información de todas las facturas obtenida con éxito!",
                facturas: facturas
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Encontrar una factura por ID
exports.findById = (req, res) => {
    Factura.findByPk(req.params.id)
        .then(factura => {
            res.status(200).json({
                message: "Factura recuperada exitosamente con id = " + req.params.id,
                factura: factura
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Actualizar una factura por ID
exports.update = (req, res) => {
    let id = req.params.id;
    Factura.update(req.body, { where: { id_factura: id } })
        .then(() => {
            res.status(200).json({
                message: "Factura actualizada exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo actualizar la factura con id = " + id,
                error: error.message
            });
        });
}

// Eliminar una factura por ID
exports.delete = (req, res) => {
    let id = req.params.id;
    Factura.destroy({ where: { id_factura: id } })
        .then(() => {
            res.status(200).json({
                message: "Factura eliminada exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo eliminar la factura con id = " + id,
                error: error.message
            });
        });
}
