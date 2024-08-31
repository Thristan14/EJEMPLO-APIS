const db = require('../config/db.config.js');
const Proveedor = db.Proveedor;

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
                message: "Uploaded successfully a provider with id = " + result.id_proveedor,
                proveedor: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los proveedores
exports.findAll = (req, res) => {
    Proveedor.findAll()
        .then(proveedores => {
            res.status(200).json({
                message: "Get all providers' Infos Successfully!",
                proveedores: proveedores
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un proveedor por Id
exports.findById = (req, res) => {
    Proveedor.findByPk(req.params.id_proveedor)
        .then(proveedor => {
            res.status(200).json({
                message: "Successfully retrieved a provider with id = " + req.params.id_proveedor,
                proveedor: proveedor
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar un proveedor por Id
exports.update = (req, res) => {
    let id_proveedor = req.params.id_proveedor;
    Proveedor.update(req.body, { where: { id_proveedor: id_proveedor } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully a provider with id = " + id_proveedor
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a provider with id = " + id_proveedor,
                error: error.message
            });
        });
}

// Eliminar un proveedor por Id
exports.delete = (req, res) => {
    let id_proveedor = req.params.id_proveedor;
    Proveedor.destroy({ where: { id_proveedor: id_proveedor } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully a provider with id = " + id_proveedor
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a provider with id = " + id_proveedor,
                error: error.message
            });
        });
}
