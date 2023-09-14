const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuItemSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
