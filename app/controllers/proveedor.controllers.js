const db = require('../config/db.config.js');
const Proveedor = db.Proveedor; // Asegúrate de que el nombre del modelo coincida con el definido en db.config.js

// Crear un nuevo proveedor
exports.create = (req, res) => {
    let proveedor = {};

    try {
        proveedor.id_proveedor = req.body.id_proveedor;
        proveedor.empresa = req.body.empresa;
        proveedor.direccion = req.body.direccion;
        proveedor.telefono = req.body.telefono;
        proveedor.nit = req.body.nit;
        proveedor.ciudad = req.body.ciudad;
        proveedor.pais = req.body.pais;
        proveedor.contacto = req.body.contacto;
        proveedor.email = req.body.email;
        proveedor.telefono_contacto = req.body.telefono_contacto;
        proveedor.estatus = req.body.estatus;

        Proveedor.create(proveedor).then(result => {
            res.status(200).json({
                message: "Proveedor creado exitosamente con id = " + result.id_proveedor,
                proveedor: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Falló!",
            error: error.message
        });
    }
}

// Recuperar todos los proveedores
exports.findAll = (req, res) => {
    Proveedor.findAll()
        .then(proveedores => {
            res.status(200).json({
                message: "¡Información de todos los proveedores obtenida con éxito!",
                proveedores: proveedores
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Encontrar un proveedor por Id
exports.findById = (req, res) => {
    Proveedor.findByPk(req.params.id)
        .then(proveedor => {
            res.status(200).json({
                message: "Proveedor recuperado exitosamente con id = " + req.params.id,
                proveedor: proveedor
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Actualizar un proveedor por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Proveedor.update(req.body, { where: { id_proveedor: id } })
        .then(() => {
            res.status(200).json({
                message: "Proveedor actualizado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo actualizar el proveedor con id = " + id,
                error: error.message
            });
        });
}

// Eliminar un proveedor por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Proveedor.destroy({ where: { id_proveedor: id } })
        .then(() => {
            res.status(200).json({
                message: "Proveedor eliminado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo eliminar el proveedor con id = " + id,
                error: error.message
            });
        });
}
