const db = require('../config/db.config.js');
const Producto = db.Producto; // Asegúrate de que el nombre del modelo coincida con el definido en tu archivo de Sequelize

// Crear un nuevo producto
exports.create = (req, res) => {
    let producto = {};

    try {
        producto.id_producto = req.body.id_producto;
        producto.descripcion = req.body.descripcion;
        producto.stock = req.body.stock;
        producto.stock_minimo = req.body.stock_minimo;
        producto.precio_unitario = req.body.precio_unitario;
        producto.id_proveedor = req.body.id_proveedor;

        Producto.create(producto).then(result => {
            res.status(200).json({
                message: "Producto creado exitosamente con id = " + result.id_producto,
                producto: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Falló!",
            error: error.message
        });
    }
}

// Recuperar todos los productos
exports.findAll = (req, res) => {
    Producto.findAll()
        .then(productos => {
            res.status(200).json({
                message: "¡Información de todos los productos obtenida con éxito!",
                productos: productos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Encontrar un producto por Id
exports.findById = (req, res) => {
    Producto.findByPk(req.params.id)
        .then(producto => {
            res.status(200).json({
                message: "Producto recuperado exitosamente con id = " + req.params.id,
                producto: producto
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Actualizar un producto por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Producto.update(req.body, { where: { id_producto: id } })
        .then(() => {
            res.status(200).json({
                message: "Producto actualizado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo actualizar el producto con id = " + id,
                error: error.message
            });
        });
}

// Eliminar un producto por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Producto.destroy({ where: { id_producto: id } })
        .then(() => {
            res.status(200).json({
                message: "Producto eliminado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo eliminar el producto con id = " + id,
                error: error.message
            });
        });
}
