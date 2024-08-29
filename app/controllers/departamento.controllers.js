const db = require('../config/db.config.js');
const Departamento = db.Departamento;

// Crear un nuevo departamento
exports.create = (req, res) => {
    let departamento = {};

    try {
        departamento.idDepartamento = req.body.idDepartamento;
        departamento.descripcion = req.body.descripcion;

        Departamento.create(departamento).then(result => {
            res.status(200).json({
                message: "Departamento creado exitosamente con id = " + result.idDepartamento,
                departamento: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Falló!",
            error: error.message
        });
    }
}

// Recuperar todos los departamentos
exports.findAll = (req, res) => {
    Departamento.findAll()
        .then(departamentos => {
            res.status(200).json({
                message: "¡Información de todos los departamentos obtenida con éxito!",
                departamentos: departamentos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Encontrar un departamento por Id
exports.findById = (req, res) => {
    Departamento.findByPk(req.params.id)
        .then(departamento => {
            res.status(200).json({
                message: "Departamento recuperado con éxito con id = " + req.params.id,
                departamento: departamento
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Actualizar un departamento por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Departamento.update(req.body, { where: { idDepartamento: id } })
        .then(() => {
            res.status(200).json({
                message: "Departamento actualizado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo actualizar el departamento con id = " + id,
                error: error.message
            });
        });
}

// Eliminar un departamento por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Departamento.destroy({ where: { idDepartamento: id } })
        .then(() => {
            res.status(200).json({
                message: "Departamento eliminado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo eliminar el departamento con id = " + id,
                error: error.message
            });
        });
}
