const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	items: [
		{
			menuItem: {
				type: Schema.Types.ObjectId,
				ref: 'MenuItem',
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
		},
	],
	address: {
		type: Schema.Types.ObjectId,
		ref: 'Address',
		required: true,
	},
	branch: {
		type: Schema.Types.ObjectId,
		ref: 'RestaurantBranch',
		required: true,
	},
	totalPrice: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
