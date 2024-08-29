const db = require('../config/db.config.js');
const Empleado = db.Empleado;

// Crear un nuevo empleado
exports.create = (req, res) => {
    let empleado = {};

    try {
        empleado.idEmpleado = req.body.idEmpleado;
        empleado.primerNombre = req.body.primerNombre;
        empleado.segundoNombre = req.body.segundoNombre;
        empleado.primerApellido = req.body.primerApellido;
        empleado.segundoApellido = req.body.segundoApellido;
        empleado.nit = req.body.nit;
        empleado.salario = req.body.salario;
        empleado.estatus = req.body.estatus;
        empleado.idDepartamento = req.body.idDepartamento;

        Empleado.create(empleado).then(result => {
            res.status(200).json({
                message: "Empleado creado exitosamente con id = " + result.idEmpleado,
                empleado: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Falló!",
            error: error.message
        });
    }
}

// Recuperar todos los empleados
exports.findAll = (req, res) => {
    Empleado.findAll()
        .then(empleados => {
            res.status(200).json({
                message: "¡Información de todos los empleados obtenida con éxito!",
                empleados: empleados
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Encontrar un empleado por Id
exports.findById = (req, res) => {
    Empleado.findByPk(req.params.id)
        .then(empleado => {
            res.status(200).json({
                message: "Empleado recuperado exitosamente con id = " + req.params.id,
                empleado: empleado
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "¡Error!",
                error: error
            });
        });
}

// Actualizar un empleado por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Empleado.update(req.body, { where: { idEmpleado: id } })
        .then(() => {
            res.status(200).json({
                message: "Empleado actualizado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo actualizar el empleado con id = " + id,
                error: error.message
            });
        });
}

// Eliminar un empleado por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Empleado.destroy({ where: { idEmpleado: id } })
        .then(() => {
            res.status(200).json({
                message: "Empleado eliminado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se pudo eliminar el empleado con id = " + id,
                error: error.message
            });
        });
}
