const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
	products: [
		{
			productId: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'product'
			},
			quantity: {
				type: Number,
				required: true
			}
		}
	],
	user: {
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'user'
		},
		email: {
			type: String,
			required: true
		},
		telefono: {
			type: String,
			required: true
		},
		nombre: {
			type: String,
			required: true
		},
		apellido: {
			type: String,
			required: true
		},
		calle: {
			type: String,
			required: true
		},
		numero: {
			type: String,
			required: true
		},
		localidad: {
			type: String,
			required: true
		},
		provincia: {
			type: String,
			required: true
		},
		CP: {
			type: Number,
			required: true
		}
	},
	status: {
		default: 'Iniciado'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('order', orderSchema);
