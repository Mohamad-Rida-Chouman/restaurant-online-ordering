const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
	label: {
		type: String,
		required: true,
	},
	completeAddress: {
		type: String,
		required: true,
	},
	coordinates: {
		type: [Number],
		required: true,
	},
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
