const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new mongoose.Schema(
	{
		product: {
			productId: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'product'
			}
		},
		user: {
			userId: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'user'
			}
		},
		question: {
			type: String,
			required: true
		},
		answer: {
			type: String
		},
		open: {
			type: Boolean,
			default: () => {
				return !this.answer;
			}
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('question', questionSchema);
