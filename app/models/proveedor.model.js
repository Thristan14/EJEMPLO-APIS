module.exports = (sequelize, Sequelize) => {
	const Proveedor = sequelize.define('proveedor', {
		id_proveedor: {
			type: Sequelize.NUMERIC
		},
		empresa: {
			type: Sequelize.STRING(100)
		},
		direccion: {
			type: Sequelize.STRING(100)
		},
		telefono: {
			type: Sequelize.NUMERIC
		},
		nit: {
			type: Sequelize.STRING(30)
		},
		ciudad: {
			type: Sequelize.STRING(100)
		},
		pais: {
			type: Sequelize.STRING(100)
		},
		contacto: {
			type: Sequelize.STRING(100)
		},
		email: {
			type: Sequelize.STRING(100)
		},
		telefono_contacto: {
			type: Sequelize.NUMERIC
		},
		estatus: {
			type: Sequelize.NUMERIC
		},
		createdAt: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
			allowNull: false
		},
		updatedAt: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
			allowNull: false
		}
	});

	return Proveedor;
}