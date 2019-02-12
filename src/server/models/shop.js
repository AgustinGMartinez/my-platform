const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new mongoose.Schema({
	user: {
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'user'
		}
	},
	products: [
		{
			productId: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'product'
			}
		}
	],
	kind: {
		type: String,
		required: true,
		default: 'product'
	}
});

module.exports = mongoose.model('shop', shopSchema);
