const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema(
	{
		user: {
			userId: { type: Schema.Types.ObjectId, required: true, ref: 'user' }
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		images: [
			{
				url: {
					type: string,
					required: true
				}
			}
		],
		discount: {
			type: Number
		},
		features: [
			{
				id: {
					type: Schema.Types.ObjectId,
					default: () => new Schema.Types.ObjectId()
				},
				description: {
					type: String,
					required: true
				}
			}
		],
		questions: [
			{
				questionId: { type: Schema.Types.ObjectId, ref: 'question' }
			}
		]
	},
	{ timestamps: true }
);

module.exports = mongoose.model('product', productSchema);
