const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	info: {
		nombre: {
			type: String
		},
		apellido: {
			type: String
		},
		calle: {
			type: String
		},
		numero: {
			type: String
		},
		localidad: {
			type: String
		},
		provincia: {
			type: String
		},
		CP: {
			type: Number
		},
		telefono: {
			type: Number
		}
	},
	shops: [
		{
			shopId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'shop'
			}
		}
	],
	cart: [
		{
			userId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'user',
				required: true
			},
			products: [
				{
					productId: {
						type: mongoose.Schema.Types.ObjectId,
						required: true,
						ref: 'product'
					},
					quantity: {
						type: Number,
						required: true
					}
				}
			]
		}
	],
	wishes: [
		{
			productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product' }
		}
	],
	orders: [
		{
			orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'order' }
		}
	]
});

module.exports = mongoose.model('user', userSchema);
